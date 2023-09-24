const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = Schema(
  {
    breakfast: [
      {
        name: { type: String },
        carbohydrates: { type: Number },
        protein: { type: Number },
        fat: { type: Number },
        calories: { type: Number },
        id: { type: String },
      },
    ],

    dinner: [
      {
        name: { type: String },
        carbohydrates: { type: Number },
        protein: { type: Number },
        fat: { type: Number },
        calories: { type: Number },
        id: { type: String },
      },
    ],

    snack: [
      {
        name: { type: String },
        carbohydrates: { type: Number },
        protein: { type: Number },
        fat: { type: Number },
        calories: { type: Number },
        id: { type: String },
      },
    ],

    lunch: [
      {
        name: { type: String },
        carbohydrates: { type: Number },
        protein: { type: Number },
        fat: { type: Number },
        calories: { type: Number },
        id: { type: String },
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    date: {
      type: String,
    },
    totalCalories: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);
const addProduct = Joi.object({
  breakfast: Joi.array(),
  lunch: Joi.array(),
  snack: Joi.array(),
  dinner: Joi.array(),
});
const createProduct = Joi.object({
  products: Joi.array(),
  type: Joi.string(),
  breakfast: Joi.object(),
  lunch: Joi.object(),
  snack: Joi.object(),
  dinner: Joi.object(),
  totalCalories: Joi.number(),
  id:Joi.string()
});
const updateProduct = Joi.object({
  product: Joi.object(),
  type: Joi.string(),
});

const productSchemas = { addProduct, createProduct, updateProduct };

const Products = model("product", productSchema);

module.exports = { Products, productSchemas };
