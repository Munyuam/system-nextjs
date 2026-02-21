import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // USERS (Tenant + Landlord)
  users: defineTable({
    name: v.string(),
    email: v.string(),
    passwordHash: v.string(),
    role: v.union(v.literal("tenant"), v.literal("landlord")),

    phone: v.optional(v.string()),

    // landlord verification info
    nationalId: v.optional(v.string()),
    idImageUrl: v.optional(v.string()),
    isVerified: v.optional(v.boolean()),

    createdAt: v.number(),
  }).index("by_email", ["email"]),

  // PROPERTY (1 per landlord)
  properties: defineTable({
    landlordId: v.id("users"),

    name: v.string(),
    location: v.string(),
    description: v.string(),
    rules: v.string(),
    imageUrl: v.string(),

    createdAt: v.number(),
  }).index("by_landlord", ["landlordId"]),

  // ROOM TYPES
  rooms: defineTable({
    propertyId: v.id("properties"),
    name: v.string(), // Single, Double, VIP
    price: v.number(),
    capacity: v.number(),
    availableBeds: v.number(),
  }).index("by_property", ["propertyId"]),

  // BOOKINGS
  bookings: defineTable({
    tenantId: v.id("users"),
    roomId: v.id("rooms"),

    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("rejected"),
      v.literal("cancelled"),
      v.literal("checked_in"),
      v.literal("checked_out")
    ),

    startDate: v.number(),
    endDate: v.number(),

    createdAt: v.number(),
  })
    .index("by_tenant", ["tenantId"])
    .index("by_room", ["roomId"]),

  // ANNOUNCEMENTS
  announcements: defineTable({
    propertyId: v.id("properties"),
    title: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_property", ["propertyId"]),

  // COMMENTS / REACTIONS
  comments: defineTable({
    announcementId: v.id("announcements"),
    userId: v.id("users"),
    message: v.string(),
    reaction: v.optional(v.union(
      v.literal("like"),
      v.literal("love")
    )),
    createdAt: v.number(),
  }).index("by_announcement", ["announcementId"]),

  // REPORTS / ISSUES
  reports: defineTable({
    tenantId: v.id("users"),
    propertyId: v.id("properties"),

    title: v.string(),
    description: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("in_progress"),
      v.literal("resolved")
    ),

    createdAt: v.number(),
  }).index("by_property", ["propertyId"]),

  // PAYMENTS (manual or online)
  payments: defineTable({
    tenantId: v.id("users"),
    propertyId: v.id("properties"),

    amount: v.number(),
    method: v.string(), // cash, transfer
    notes: v.optional(v.string()),
    paidAt: v.number(),
  }).index("by_tenant", ["tenantId"]),

  // LEAVE REQUESTS
  leaveRequests: defineTable({
    tenantId: v.id("users"),
    startDate: v.number(),
    endDate: v.number(),
    reason: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("rejected")
    ),
  }).index("by_tenant", ["tenantId"]),
});