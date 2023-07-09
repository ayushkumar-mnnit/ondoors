


function Cards(){
    return (
        <>
            
<section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="section-header text-center">
        <h2 className="fw-bold fs-1">
          Our
          <span className="b-class-secondary"> Services</span>
        </h2>
        <p className="sec-icon"><i className="fa-solid fa-gear"></i></p>
      </div>
    </div>
    <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
      <div className="col">
        <div className="service-card">
          {/* <div className="icon-wrapper">
            <i className="fa-solid fa-chart-line"></i>
          </div> */}
          <h3>Home Services</h3>
          <p>
           Regular cleaning, cooking, gardening, looking after young ones and other household chores.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          {/* <div className="icon-wrapper">
            <i className="fa-solid fa-arrows-down-to-people"></i>
          </div> */}
          <h3>General Maintenance</h3>
          <p>
            Electrical repairs ( installations, wiring, lighting fixtures, and circuitry.), Plumbing service, Carpentary, Painting & white-washing Services and other home renovation works.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          {/* <div className="icon-wrapper">
            <i className="fa-solid fa-globe"></i>
          </div> */}
          <h3>Appliance Maintenance</h3>
          <p>
          servicing of home appliances such as refrigerators, washing machines, dishwashers, and ovens.
          Heating, ventilation, and air conditioning repairs, installations, maintenance, and duct cleaning.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          {/* <div className="icon-wrapper">
            <i className="fa-solid fa-money-check-dollar"></i>
          </div> */}
          <h3>Academic Support</h3>
          <p>
          For students and parents seeking for private tutors to provide personalized instruction and assistance in various subjects
          </p>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          {/* <div className="icon-wrapper">
            <i className="fa-regular fa-circle-check"></i>
          </div> */}
          <h3>Grocery</h3>
          <p>
            Fresh grocery accessibility via local vendors and grocers of your locality
          </p>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          {/* <div className="icon-wrapper">
            <i className="fa-solid fa-people-group"></i>
          </div> */}
          <h3>Health Care</h3>
          <p>
            Consult trusted medical practitioners specially in case of emergency situations like during night, when immediate visit to a hospital is not possible.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default Cards;




// import React, { useState } from 'react';

// function Cards() {
//   const [isHindi, setIsHindi] = useState(false);

//   const toggleLanguage = () => {
//     setIsHindi(!isHindi);
//   };

//   const services = [
//     {
//       id: 1,
//       title: isHindi ? 'घरेलू सेवाएं' : 'Home Services',
//       description: isHindi
//         ? 'नियमित सफाई, खाना बनाना, बागवानी, छोटे बच्चों की देखभाल और अन्य घरेलू काम।'
//         : 'Regular cleaning, cooking, gardening, looking after young ones and other household chores.',
//     },
//     {
//       id: 2,
//       title: isHindi ? 'सामान्य रखरखाव' : 'General Maintenance',
//       description: isHindi
//         ? 'इलेक्ट्रिकल रिपेयर (स्थापना, वायरिंग, लाइटिंग फिक्सचर्स और सर्किट्री), प्लंबिंग सेवा, कारपेंटरी, पेंटिंग का काम, सफेदी का काम और अन्य घर की मरम्मत काम।'
//         : 'Electrical repairs (installations, wiring, lighting fixtures, and circuitry.), Plumbing service, Carpentry, Painting & white-washing Services and other home renovation works.',
//     },
//     {
//       id: 3,
//       title: isHindi ? 'उपकरण रखरखाव' : 'Appliance Maintenance',
//       description: isHindi
//         ? 'घरेलू उपकरणों की सेवा जैसे कि रेफ्रिजरेटर, वॉशिंग मशीन, डिशवॉशर और ओवन। हीटिंग, वेंटिलेशन और एयर कंडीशनिंग की रिपेयर, स्थापना, रखरखाव और डक्ट क्लीनिंग।'
//         : 'Servicing of home appliances such as refrigerators, washing machines, dishwashers, and ovens. Heating, ventilation, and air conditioning repairs, installations, maintenance, and duct cleaning.',
//     },
//     {
//       id: 4,
//       title: isHindi ? 'शैक्षिक सहायता' : 'Academic Support',
//       description: isHindi
//         ? 'विभिन्न विषयों में व्यक्तिगत निर्देश और सहायता प्रदान करने के लिए छात्रों और माता-पिता के लिए निजी ट्यूटर्स की तलाश करने वाले छात्रों के लिए।'
//         : 'For students and parents seeking private tutors to provide personalized instruction and assistance in various subjects.',
//     },
//     {
//       id: 5,
//       title: isHindi ? 'किराना' : 'Grocery',
//       description: isHindi
//         ? 'स्थानीय विक्रेताओं और ग्राहकों के लिए ताजगी से भरपूर किराना उपलब्धता।'
//         : 'Fresh grocery accessibility via local vendors and grocers.',
//     },
//     {
//       id: 6,
//       title: isHindi ? 'स्वास्थ्य सेवा' : 'Health Care',
//       description: isHindi
//         ? 'आपातकालीन स्थितियों में (रात्रि में जब अस्पताल तक तत्परता से नहीं जा सकता है) भरोसेमंद चिकित्सा प्रदाताओं की परामर्श करें।'
//         : 'Consult trusted medical practitioners, especially in emergency situations when immediate hospital visits are not possible.',
//     },
//   ];

//   return (
//     <>
//       <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
//         <div className="container">
//           <div className="row">
//             <div className="section-header text-center">
//               <h2 className="fw-bold fs-1">
//                 {isHindi ? (
//                   <>
//                     हमारी
//                     <span className="b-class-secondary"> सेवाएं</span>
//                   </>
//                 ) : (
//                   <>
//                     Our
//                     <span className="b-class-secondary"> Services</span>
//                   </>
//                 )}
//               </h2>
//               <p className="sec-icon">
//                 <i className="fa-solid fa-gear"></i>
//               </p>
//             </div>
//           </div>
//           <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
//             {services.map((service) => (
//               <div className="col" key={service.id}>
//                 <div className="service-card">
//                   <h3>{service.title}</h3>
//                   <p>{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <div className="language-toggle">
//           <button className='tgb' onClick={toggleLanguage}>
//             {isHindi ? 'Switch to English' : 'हिंदी में देखें'}
//           </button>
//         </div>
//     </>
//   );
// }

// export default Cards;
