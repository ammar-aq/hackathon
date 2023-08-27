import { cookies } from 'next/headers';
import React from 'react';

export default async function page() {
  const setCookies = cookies();
  // const uid = setCookies.get('user_id')?.value;
  // console.log("user_id", uid)
  const res = await fetch('http://localhost:3000/api/cart?user_id=265a3a49-5abf-4ffc-8667-475579c87b83');
  const data = await res.json();
  console.log("data",data);

  return (
    <div>
      <h2 className="text-2xl font-bold">Cart</h2>
      <div>
        {data.map((item: any) => (
          <div>
            <h1>{item.product_title}</h1>
            <h1>{item.product_title}</h1>
            <h1>{item.product_price}</h1>
            <h1>{item.product_quantity}</h1>
            <img src={item.image_url} alt="" width={300} height={300} />
          </div>
        ))}
      </div>
    </div>
  )
}

