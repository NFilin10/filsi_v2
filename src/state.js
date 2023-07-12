import slide1 from "./assets/slide1.webp";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import service1 from "./assets/service1.jpg";
import service2 from "./assets/service2.jpg";
import service3 from "./assets/service3.jpg";
import service4 from "./assets/service4.jpg";
import service5 from "./assets/service5.jpg";
import service6 from "./assets/service6.jpg";
import service7 from "./assets/service7.png";
import service8 from "./assets/service8.jpg";
import kakumaeSadam from './assets/kakumaeSadam.jpg'
import moduleTech from './assets/moduleTech.jpg'
import eestiTraat from './assets/eestiTraat.jpg'
import favor from './assets/favor.jpg'
import wegLogo from "./assets/wegLogo.png";
import maruLogo from "./assets/maruLogo.png";
import evrLogo from "./assets/evrLogo.png";
import lwLogo from "./assets/lwLogo.png";
import onninenLogo from "./assets/onninenLogo.webp";
import esvikaLogo from "./assets/esvikaLogo.png";
import lucidusLogo from "./assets/lucidusLogo.png";
import esbLogo from "./assets/esbLogo.png";
import harjuLogo from "./assets/harjuLogo.png";
import stokkerLogo from "./assets/stokkerLogo.png";
import melkerLogo from "./assets/melkerLogo.png";
import projectsGallery from "./comonents/Projects/ProjectsGallery/ProjectsGallery";




const state = {
    home: [{swiper: [
        {img: slide1, text1: "Elektrifirma usaldusväärsed partnerid.", text2: "Ehitajad, kes teevad parimat tööd", btnText: "Kes me oleme"},
        {img: slide2, text1: "Avasta võimsad elektrilahendused meie ettevõttega.", text2: "Oleme ehitajad, kes loovad tuleviku", btnText: "Kes me oleme"},
        {img: slide3, text1: "Elektrifirma, mis pakub innovaatilisi lahendusi.", text2: "Meie ehitajad toovad teie ideed ellu", btnText: "Kes me oleme"}
        ],
        services: [
            {id: 1, serviceName: "Välisvõrkude ehitus", serviceDescription: "See teenus hõlmab elektrivõrkude rajamist ja hooldust välitingimustes, tagades elektrienergia leviku piirkonnas või territooriumil.", serviceImg: service1, shortDesc: ["Electrical", "Mechanical", "Plumbing"]},
            {id: 2, serviceName: "Sisetööd", serviceDescription: "Selle teenusega tegeletakse elektrisüsteemide paigaldamise, remondi ja hooldusega hoonetes ja struktuurides, et tagada ohutu ja usaldusväärne elektrivarustus.", serviceImg: service2,  shortDesc: ["Electrical", "Mechanical", "Plumbing"]},
            {id: 3, serviceName: "Kontaktvõrgu ehitus", serviceDescription: "See teenus hõlmab kontaktliinide või elektriliinide ehitamist, mille abil elektrienergia edastatakse ühendatud seadmetele ja klientidele.", serviceImg: service3,  shortDesc: ["Electrical", "Mechanical", "Plumbing"]},
            {id: 4, serviceName: "Kaevetööd", serviceDescription: "Kaevetööd hõlmavad maapinna kaevamist ja töötlemist, et paigaldada elektrikaablid, torustikud või muud seadmed elektrivõrguga seotud projekte ja rajatisi vajavate tööde jaoks.", serviceImg: service4,  shortDesc: ["Electrical", "Mechanical", "Plumbing"]},
            {id: 5, serviceName: "Alajaamade ehitus", serviceDescription: " See teenus hõlmab alajaamade rajamist, mis on olulised elektrivarustuse jaotamiseks ning energia muundamiseks ühendatud piirkondadele ja klientidele.", serviceImg: service5,  shortDesc: ["Electrical", "Mechanical", "Plumbing"]},
            {id: 6, serviceName: "Käit", serviceDescription: "Käituteenus hõlmab elektrisüsteemide ja seadmete järelevalvet, hooldust, remonti ja optimeerimist, et tagada nende tõrgeteta toimimine ja pikaajaline usaldusväärsus.", serviceImg: service6,  shortDesc: ["Electrical", "Mechanical", "Plumbing"]},
            {id: 7, serviceName: "Projekteerimine", serviceDescription: "Projekteerimisteenus hõlmab kohandatud elektrisüsteemide planeerimist ja kavandamist vastavalt klientide vajadustele, arvestades ohutuse, tõhususe ja energiasäästlikkuse põhimõtteid.", serviceImg: service7,  shortDesc: ["Electrical", "Mechanical", "Plumbing"]},
            {id: 8, serviceName: "Ehitustööd", serviceDescription: "Ehitusteenus hõlmab elektriinfrastruktuuri ehitamist, sealhulgas elektrisüsteemide, kaablite, juhtmete ja muude seadmete paigaldamist vastavalt projektidele ja ehitusstandarditele.", serviceImg: service8,  shortDesc: ["Electrical", "Mechanical", "Plumbing"]},
        ],
        projects: [
            {img: kakumaeSadam, name: "Kakumäe Sadam"},
            {img: moduleTech, name: "Module Tech"},
            {img: eestiTraat, name: "Eesti Traat"},
            {img: favor, name: "Favor"}
        ],
        partners: [
            {name:'WEG', logo: wegLogo},
            {name:'Maru', logo: maruLogo},
            {name:'EVR', logo: evrLogo},
            {name:'LW', logo: lwLogo},
            {name:'Onninen', logo: onninenLogo},
            {name:'Esvika', logo: esvikaLogo},
            {name:'Lucidus', logo: lucidusLogo},
            {name:'ESB', logo: esbLogo},
            {name:'Harju El.', logo: harjuLogo},
            {name:'Stokker', logo: stokkerLogo},
            {name:'Melker', logo: melkerLogo}
        ]
    }],


}
export default state