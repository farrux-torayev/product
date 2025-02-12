import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./components/loading";
import Card from "./components/card";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    async function fetchProduct() {
      try{
      setIsLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
      }
      catch(err){
        console.log(err.message);
        
      setErrorMsg(err.message)
      }
      finally{
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);


  return (
    <>
    <h2 className="text-center text-2xl font-bold ">Products</h2>
    {errorMsg && <div className="text-red-600 text-2xl text-center font-bold">{errorMsg}</div>}
      <div className="grid  m-auto   grid-cols-4 w-[1000px]   gap-[12px]  py-[50px] ">
        {isLoading && <Loading />}
        {products.map((item) => (
          <Card item={item} className="" />
        ))}
      </div>
    </>
  );
};

export default App;


// REST API asosiy xususiyatlari
// Klient-server arxitekturasi:

// Klient (masalan, frontend ilova) va server (backend ilova) bir-biridan mustaqil ishlaydi.
// Server ma'lumotlarni boshqaradi, klient esa ulardan foydalanadi.
// Stateless (holatsiz):

// Har bir so‘rov (request) alohida ishlov beriladi va server hech qanday holatni saqlamaydi.
// Har bir so'rovda zarur barcha ma'lumotlar (auth token, parametrlari) uzatiladi.

// Resurslarga asoslangan:

// REST API resurslarni URL orqali ifodalaydi.
// Har bir resurs o'ziga xos URLga ega (masalan, /users yoki /products).

// HTTP metodlari:

// REST API HTTP metodlaridan foydalanadi:
// GET: Ma'lumotlarni olish uchun.
// POST: Yangi ma'lumot qo'shish uchun.
// PUT/PATCH: Ma'lumotni yangilash uchun.
// DELETE: Ma'lumotni o'chirish uchun.
// JSON formatida ma'lumot almashish:

// REST API odatda ma'lumotlarni JSON formatida yuboradi va qabul qiladi.
// XML ham ishlatilishi mumkin, ammo JSON ko'proq qulay va tezkor.
// REST API ning afzalliklari
// Platformaga bog'liq emas: Har qanday dasturlash tilida ishlatish mumkin.
// Oson integratsiya: Klient va server o'rtasida samarali aloqa o'rnatadi.
// Tushunarli va soddalik: URL orqali resurslar boshqarilishi intuitiv.
// Moslashuvchanlik: Kengaytirilishi oson va o'lchami katta loyihalar uchun mos.
// REST API tuzilishi
// REST API quyidagi tuzilishda ishlaydi:

// Endpoint (manzil): Bu resursga kirish uchun URL.

// Masalan:
// GET /users - foydalanuvchilar ro‘yxatini olish.
// POST /users - yangi foydalanuvchi yaratish.
// HTTP metodlari:

// Turli amallarni bajarish uchun ishlatiladi:
// HTTP Metodi	Amali
// GET	Resursni olish
// POST	Resursni qo‘shish
// PUT	Resursni to‘liq yangilash
// PATCH	Resursni qisman yangilash
// DELETE	Resursni o‘chirish
// Headers (Sarlavhalar):

// So'rov haqida qo'shimcha ma'lumot beradi.
// Masalan:
// json
// Копировать
// Редактировать
// {
//   "Content-Type": "application/json",
//   "Authorization": "Bearer token_value"
// }
// Body (So'rov tanasi):

// Faqat POST, PUT yoki PATCH metodlarida ishlatiladi.
// Masalan, yangi foydalanuvchini qo‘shish uchun:
// json
// Копировать
// Редактировать
// {
//   "name": "Ali",
//   "email": "ali@example.com"
// }
// REST API bilan ishlashga misol
// Foydalanuvchi ma'lumotlarini boshqarish uchun REST API yaratamiz:

// Amaliyot	HTTP Metod	URL	Izoh
// Foydalanuvchilar ro‘yxati	GET	/users	Barcha foydalanuvchilarni olish
// Foydalanuvchi yaratish	POST	/users	Yangi foydalanuvchi qo‘shish
// Foydalanuvchi ma'lumotlari	GET	/users/{id}	ID bo‘yicha foydalanuvchini olish
// Foydalanuvchini yangilash	PUT/PATCH	/users/{id}	ID bo‘yicha yangilash
// Foydalanuvchini o‘chirish	DELETE	/users/{id}	ID bo‘yicha o‘chirish

// Xususiyat	REST API	GraphQL
// Ma'lumot olish	Oldindan belgilangan URL'lar	O'zingizga kerakli maydonlarni aniq so'rashingiz mumkin
// Moslashuvchanlik	Past	Yuqori
// Overfetching	Ko'p hollarda bo'ladi	Yo'q
