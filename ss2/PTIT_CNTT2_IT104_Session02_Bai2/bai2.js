let gettingWithWeather = (name,weather)=>{
    if(weather == "sunny"){
        console.log(`Chào ${name}!Hôm nay trời nắng tuyệt vời !`);
    }else if(weather == "rainy"){
        console.log(`Chào ${name}Hôm nay trời mua , Hãy mang theo ô!`)
    }else if(weather == "cloudy"){
        console.log(`Chào ${name}Hôm nay thời tiết không xác định`)
    }
}

gettingWithWeather("dev", "sunny");