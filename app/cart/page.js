// 'use client' CSR을 하고 싶다면 이렇게 작성한다.
// *주의* SSR 이 기본이다. 그리고 onClick 같은 동적인 작업은 SSR에서 할 수 없다.
// useEffect, useState도 마찬가지로 사용할 수 없다.
// why? 내 추측 : CSR은 가상DOM을 활용해서 변화를 감지하여 그려내지만 SSR은 그게 아니니까 동적인 작업은 할 수 없는 것 아닐까?


export default function Cart() {
    let cart = ['감자', '파스타'];

    return (
        <div>
            <h4 className="title">Cart</h4>
            <div className="cart-item">
                <p>상품명</p>
                <p>$40</p>
                <p>1개</p>
            </div>
            <CartItem/>
            <CartItem/>
        </div>
    );
}

function CartItem() {
    return (
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}

