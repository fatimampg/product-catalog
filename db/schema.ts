import { randomUUID } from 'crypto'
import { relations, sql } from 'drizzle-orm'
import { integer, sqliteTable, text, unique } from 'drizzle-orm/sqlite-core'

const id = () =>
  text('id')
    .primaryKey()
    .$default(() => randomUUID())

const createdAt = () =>
  text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
        .notNull()

const addedAt = () =>
  text('added_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
        
// One user can have many wishlists (one to many)
// One product can be in several wishlists and one whislist can have several products (many to many)  

export const users = sqliteTable('users', {
    id: id().primaryKey(),
    createdAt: createdAt(),
    email: text('email').unique().notNull(),
    password: text('password').notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
   wishlists: many(wishlists) 
})) 

export const wishlists = sqliteTable('wishlists',
  {
    id: id().primaryKey(),
    createdById: text('createdById').notNull(),
    createdAt: createdAt()
  });

export const wishlistRelations = relations(wishlists, ({ many, one }) => ({
  createdBy: one(users, {
    references: [users.id],
    fields: [wishlists.createdById]
  }),
    wishlistToProducts: many(wishlistsToProducts)
})) 


export const products = sqliteTable('products', {
    id: id().primaryKey(),
    title: text('title').notNull(),
    price: integer('price').notNull(),
    category: text('category').notNull(),
    description: text('description'),
    image: text('image'),
    addedAt: addedAt()
});

export const productRelations = relations(products, ({ many }) => ({
   wishlistsToProducts: many(wishlistsToProducts) 
}))


export const wishlistsToProducts = sqliteTable('wishlists_to_products',
  {
  wishlistId: text('wishlistId').notNull().references(()=> wishlists.id), 
  productId: text('productId').notNull().references(()=> products.id), 
});

export const wishlistsToProductsRelations = relations(wishlistsToProducts, ({ one }) => ({
  wishlist: one(wishlists, {
    fields: [wishlistsToProducts.wishlistId], 
    references: [wishlists.id],
  }),
  product: one(products, {
    fields: [wishlistsToProducts.productId], 
    references: [products.id],
  }),
}));