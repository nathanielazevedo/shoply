/** @format */
import { addToCart, removeFromCart } from './actions'

it("should add to cart", function () {
  expect(addToCart(45)).toEqual({ type: 'ADD-TO-CART', id: 45 });
});

it("should remove from cart", function () {
  expect(removeFromCart(45)).toEqual({ type: 'REMOVE-FROM-CART', id: 45 });
});
   