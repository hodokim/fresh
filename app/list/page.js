// import Image from "next/image" 이미지 최적화는 이렇게 해볼 수 있다.
// <Image></Image> 를 활용하며 반드시 태그 안에 width, height을 명시해줘야 한다.
// 또한 next.config.js 내에서 별도의 설정이 필요하다. (자세한건 구글링을 통해 참조하자.)
'use client'


import {useState} from "react";

export default function List() {
    let products = ["Tomatoes", "Pasta", "Coconut"];
    let [quantity, setQuantity] = useState([0,0,0])

    return (
        <div>
            <h2>Products</h2>
            {
                products.map((product, idx) => {
                    return (
                        <div className="food" key={idx}>
                            <img src={`/food${idx}.png`} className="food-img" alt={product}/>
                            <h4>{product} $40</h4>
                            <button onClick={() => {
                                let copy = [...quantity];
                                copy[idx] -= 1;
                                setQuantity(copy);
                            }}>-
                            </button>
                            <span> {quantity[idx]} </span>
                            <button onClick={() => {
                                let copy = [...quantity];
                                copy[idx] += 1;
                                setQuantity(copy);
                            }}>+
                            </button>
                        </div>
                    );
                })
            }
        </div>
    )
}