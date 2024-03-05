import React from 'react';
import image1 from './Images/1.jpg';
import image2 from './Images/HappyDiwali.gif';
import wishGif from './Images/wish.gif';
import image3 from './Images/2.jfif';
import image4 from './Images/3.jfif';
import image5 from './Images/4.jfif';
import logo from './Images/2.jfif'
import logo2 from './Images/logo2.webp';
import logo3 from './Images/logo3.webp';
import logo4 from './Images/logo4.webp';
import logo5 from './Images/logo5.webp';
import logo10 from './Images/logo10.webp';
import logo12 from './Images/logo12.webp';
import logo15 from './Images/logo15.webp';



const PhotoGallery = () => {
  // Define an array of image URLs
  const imageUrls = [image1, image2,image2,image2, wishGif,image3,image4,image5];
  
  return (
    <div className='photogallery'>
      <h2 className='headcolor'>Features of Diwali</h2>
      <div className="gallery">
        {/* {imageUrls.map((imageUrl, index) => (
          <div key={index} className="gallery-item">
            <img src={imageUrl} alt={`Diwali ${index + 1}`} />
          </div>
        ))} */}<br></br>
        <h1 className='gallerypara' style={{textAlign: 'justify'}}>15 Features of Diwali That Make Everyone Love It...

        </h1><br></br>
        <p className='gallerypara' style={{textAlign: 'justify', fontStyle: 'italic'}}>India, with all its myriad colours and vibes, takes on an entirely different ‘avatar’ during Diwali, which is certainly worth experiencing.

Although the Diwali festival varies in its essence from one part of the country to another, there is something interesting and common about the ‘Festival of Lights’. It is almost impossible to find a single person who does not love this festival of Diwali.

Wondering what makes it the most awaited festival of the year?

Well, here are some of the most significant reasons.</p>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>1. That time of the year</h2><br></br>
        
        <img src={logo} height={400} width={1160} alt="That time of the year"></img><br></br><br></br>
        <p className='gallerypara' style={{textAlign: 'justify'}}>If you ever wish to travel the length and breadth of India, choose the time during Diwali festival. It is usually during the month of November that Diwali celebrations take place. So, clear blue skies with minimum chances of rainfall coupled with that nip in the air make the weather favourable for a trip to India. You can explore as much as you want, without the weather playing spoilsport. The time around November is in fact, ideal to plan an extensive tour of ‘Incredible India’ with golden triangle tour.</p><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>2. Festivity all around</h2><br></br>
        <img src={logo2} height={400} width={1160} alt="Festivity all around"></img><br></br><br></br>
        <p className='gallerypara' style={{textAlign: 'justify'}}>The enigmatic Diwali lights and the festive cheer that is all-pervasive are indeed contagious! With festive happiness hanging heavily in the air, you are bound to soak it up instantly and feel energized. There is no way you cannot make your India Vacation memorable when you explore the country during the time of Diwali. Just as the spirit of Christmas encompasses all over the world during December, Diwali is among the top festivals that have gained enormous recognition and popularity all over the world today, thanks to globalization.</p><br></br><br></br>
        <h2 className='gallerypara'>3. Family gatherings</h2><br></br>
        <img src={logo3} height={400} width={1160} alt="Family gatherings"></img><br></br><br></br>
        <p className='gallerypara' style={{textAlign: 'justify'}}>Just like every other year, you can plan to experience the authentic flavours of Diwali 2018. The festive mood springs in with the major festivals like Navratri, Durga Puja and continues right up to Diwali. With the onset of the festive season, the towns and cities in India undergo a complete makeover of sorts. Families get together in cleaning up their houses and then decorating it with traditional flowers, colours, and symbols, which are believed to dispel all evil and bring forth good luck. This whole concept of coming together and celebrating Diwali is beautiful — it is the true essence of India’s culture.</p><br></br><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>4. Spirit of Thanksgiving</h2><br></br>
        <p className='gallerypara' style={{textAlign: 'justify'}}>Diwali is perhaps the best time to let people know how much they mean to us. Just as the spirit of Thanksgiving is celebrated in the West, Indians cherish the same during Diwali. No matter what differentiates people and make them go through ups and downs in life, they are all ready to forgive and forget, and start afresh. You will find people sending tokens of appreciation to others during this time, which only marks the happiness that prevails in their hearts.</p><br></br><br></br>
        <h2 className='gallerypara'>5. Firecrackers</h2><br></br>
        <img src={logo4} height={400} width={1160} alt="Firecrackers"></img><br></br><br></br>
        <p className='gallerypara' style={{textAlign: 'justify'}}>Diwali festival is synonymous with firecrackers. Going along with the age-old tradition, both the kids and adults in the family still look forward to burning crackers. Starting with the anticipation of buying new forms of crackers, to lighting them up on Diwali, it contains a great deal of excitement. However, the prevalent sound restrictions in burning crackers have somewhat dampened the thrill to some extent.</p><br></br><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>6. Diwali gifts</h2><br></br>
        
        <p className='gallerypara' style={{textAlign: 'justify'}}>No matter what your age is, Diwali will never be complete without gifts! In fact, it would not be wrong to admit that we all look forward to receiving gifts from our near and dear ones. With golden triangle tour India, you can easily discover that starting from apparel and delectable edibles to modern day gadgets and electronic goods, the options of Diwali gifting are practically boundless.</p><br></br><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>7. Mouth-watering Sweets</h2><br></br>
        <img src={logo5} height={400} width={1160} alt="Mouth-watering Sweets"></img><br></br><br></br>
        <p className='gallerypara' style={{textAlign: 'justify'}}>Distributing sweets is one of the most integral features of wishing a happy Diwali, and this is undoubtedly one of those times that sweet-lovers look forward to. Apart from the sweet delectable that are available around the year, Diwali is marked by certain special items too. If you want to taste rare exotic sweets, then a trip with golden triangle India becomes essential. Take your pick starting from traditional sweets like gulab jamuns, laddoos of all sizes and makes, halwa, shufta, puran poli, kaju katli, barfis, malpua — the list can go on and on.</p><br></br><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>8. A break from the mundane</h2><br></br>
        
        <p className='gallerypara' style={{textAlign: 'justify'}}>Opting for the North India Tour Packages during Diwali will gear you up to witness a different image of the country. Diwali calls for a break from the monotony of the routine to which we are all chained. So this is indeed a refreshing opportunity to indulge in pleasurable activities. There will only be sights of happy people, who are not just slogging but also making time to socialize with family and friends — basking in the festive spirit.</p><br></br><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>9. Diwali shopping</h2><br></br>       
        <p className='gallerypara' style={{textAlign: 'justify'}}>Diwali is the ideal time for all shopaholics to let go of excuses and just keep shopping till they drop. Be it ethnic clothes, or a long-desired mobile phone, or that shoe that you had your eyes since eternity, buy them all! And not to mention the huge markets that are set up specifically for selling goods related to Diwali — starting with firecrackers and candles with multitudes of innovative home-décor items. Make sure to check out these Diwali bazaars in your golden triangle tour package.

</p><br></br><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>10. Lights and candles</h2><br></br>
        <img src={logo10} height={400} width={1160} alt="Lights and candles"></img><br></br><br></br>
        <p className='gallerypara' style={{textAlign: 'justify'}}>An innate feature of the Diwali celebration is the tradition of lighting candles and ‘diyas’. Diyas or small earthen oil-lamps are also decorated with paints and glitters to make them look ornamental. As per the Indian customs, every household is illuminated with candles and diyas in every direction possible; the flame is a symbol of purity and strength. Besides, the modern option of hanging long streams of fairy lights is also much availed. Every direction you look at, your eyes will be greeted by quaintly lit houses.

</p><br></br><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>11. Rangoli</h2>
        
        <p className='gallerypara' style={{textAlign: 'justify'}}>It is indeed breathtaking to watch tens and thousands of candles illuminating the landscapes, but there is much more to Diwali than that. On an India Tailor Made holiday package, you can witness how ‘Rangolis’ are created. This is an exquisite traditional art, and is created in front of the houses as well as indoors. Rangolis can be anything from simplistic designs made with colours, to large and exotic patterns that are truly one-of-a-kind. You can even try your hand at making them.

</p><br></br><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>12. Sumptuous feasts</h2><br></br>
        <img src={logo12} height={400} width={1160} alt="Sumptuous feasts"></img><br></br><br></br>
        <p className='gallerypara' style={{textAlign: 'justify'}}>India is the land of diversities and another excellent example is the celebration of Diwali festival all over the country. Different families have their own set of customs when it comes to celebrating Diwali. The same is reflected in the huge assortment of food that is prepared for this festival. People do eat out nowadays, but most prefer to celebrate and feast with their families at home. Plates and utensils brimming with the yummiest of food items are a must, and without which Diwali will never seem replete. So, needless to say, India Tailor Made vacation packages are the best for those who wish to savour authentic Indian delicacies heartily.

</p><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>13. Timeless mythological stories</h2><br></br>
        <p className='gallerypara' style={{textAlign: 'justify'}}>Folklore and legends have always kept us intrigued, across all age barriers and time zones. Diwali just adds to that fascination with its own mystic charm and age-old myths. The most notable among them is from the Hindu epic Ramayana, where Rama, after defeating evil Ravana and rescuing Sita, returns to his home in Ayodhya, to claim the throne after 14 long years. It is believed that the villagers had lit up their paths, and the entire village to mark their celebrations, and that is continued even today.

</p><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>14. Upholding the good over evil</h2><br></br>
        
        <p className='gallerypara' style={{textAlign: 'justify'}}>Although the innermost essence of Diwali 2018 remains the same i.e., celebration of good over evil, the manifestations are vivid and myriad. While in certain Indian states Goddess Kaali is worshipped, other states pay their reverence to Gods Lakshmi — Ganesha. Whichever way to choose to believe, it always drives home the same point — dispelling evil and darkness and ushering in light and prosperity. Interestingly enough, Diwali is not only celebrated by the Hindus; the Sikhs and Jains are also equal partakers of the revelry.

</p><br></br><br></br>
        <h2 className='gallerypara' style={{textAlign: 'justify'}}>15. Celebrating the “Inner Light”</h2><br></br>
        <img src={logo15} height={400} width={1160} alt="Celebrating the “Inner Light”"></img><br></br><br></br>
        <p className='gallerypara' style={{textAlign: 'justify'}}>Golden Triangle India offers some of the best packages for you to experience vibrant, loud and cheerful Diwali. But as much as it offers a glimpse into the Indian culture and festivities, there is a universal truth that remains apparently hidden amidst all the cheer. Diwali is the best time to reflect on the fact that no matter what, we can always fight back our inner demons and pursue that “inner light” or the sense of righteousness that lies within us. That is perhaps the only way to let go of all our mental barriers and emerge as a clean and enlightened soul.

</p><br></br><br></br>
<h2 className='gallerypara' style={{textAlign: 'justify'}}>Conclusion</h2><br></br>
<p className='gallerypara' style={{textAlign: 'justify'}}>If you have been planning to visit India for a long time, make it happen this year with us Holidays just for you. Take part in the Indian celebrations and traditions as much as your heart wants, and make this Diwali date, starting from November 12th, 2023, the most memorable one in your lifetime.

</p><br></br>
      </div>
    </div>
  );
};

export default PhotoGallery;
