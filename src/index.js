/**
 * @class module:model/VendingMachine
 * @classdesc
 */
class VendingMachine {
  /**
   * @constructor
   * @param {object} inventory - 상품 재고
   * @example { iceAmericano: 7 }
   */
  constructor(inventory) {}

  /**
   * @type {object}
   * @example { iceAmericano: 1000 }
   */
  static priceTags;

  /** @method getItem
   * @param {number} cash (required)
   * @param {string} product (optional)
   * @description 상품명과 지불금액을 입력하면 구입한 상품명과 개수가 콘솔로그에 찍힌다.
   * @example "아메리카노 1개를 1000원에 구매했습니다.(남은재고: 9개)""
   */
  getItem(cash, product = "iceAmericano") {}

  /** @method checkInventory
   * @param {string} product (required)
   * @param {number} quantity (required)
   * @return {boolean}
   * @description 소비자가 주문한 상품명과 수량을 인자로 전달하면, 해당 상품을 구입할 수 있는 재고가 있는지 boolean 반환한다.
   */
  #checkInventory(product, quantity) {}

  /** @method checkPayable
   * @param {number} cash (required)
   * @param {number} price (required)
   * @return {boolean}
   * @description 상품 가격과 지불 금액을 받아서, 구매 가능한지 boolean을 반환한다.
   */
  #checkPayable(cash, price) {}
}
