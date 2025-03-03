import React from "react";

const First = () => {
  return (
    <div className="h-screen text-white  bg-black  flex flex-col gap-12 w-full items-center justify-center">
      <h2 className="text-5xl tracking-widest">Başlıq <span className="bg-gradient-to-r from-orange-400 to-violet-500 text-transparent bg-clip-text">belə bəzəkli mətnlərdən ibarətdir</span></h2>
      <p className="p-12">
        Bu mətndə, müxtəlif mövzuların və ideyaların təsviri yer alır. Hər bir
        cümlə özündə müxtəlif mənalar daşıyır və ətraflı şəkildə izah edilir.
        Məqsəd oxucunun diqqətini çəkmək və onları maraqlı məzmunla təmin
        etməkdir. Bu yazının ümumi məqsədi, təcrübəni və ya məlumatı daha asan
        şəkildə ötürməkdir. Mətndəki fikirlər və düşüncələr, həmçinin müasir
        dövrün tələblərinə uyğun olaraq formalaşdırılmışdır.
      </p>
    </div>
  );
};

export default First;
 