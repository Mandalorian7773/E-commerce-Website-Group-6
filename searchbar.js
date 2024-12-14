let products = {
  Data : [{
    "modelName": "Ja 2 'Nightmare' EP",
    "price": 11500,
    "img": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_449,c_limit/0170bf4f-3211-4860-956e-c0cd974e10a9/ja-2-nightmare-ep-basketball-shoes-pPZpsS.png"
  },
  {
    "modelName": "Tatum 3",
    "price": 6000,
    "img": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_449,c_limit/d57e5066-b53b-4f9b-bd37-37d4c01b41a9/tatum-3-pf-welcome-to-garden-basketball-shoes-Rxx3lS.png"
  },
  {
    "modelName": "Ja 2 purple sky",
    "price": 3000,
    "img": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_449,c_limit/20fd0937-0c1e-4149-b098-607ce9c428be/ja-2-purple-sky-ep-basketball-shoes-hbJNNL.png"
  },
  {
    "modelName": "Tatum 3 PF 'zen'",
    "price": 45850,
    "img": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_449,c_limit/4aa50aaf-1393-4c1d-8eb3-db2a1fb16714/tatum-3-pf-zen-basketball-shoes-Rxx3lS.png"
  },
  {
    "modelName": "Nike Dunk Low",
    "price":19950 ,
    "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png"
  },
  {
    "modelName": "Nike Dunk Low SE",
    "price": 11895,
    "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8b0d4d2e-d306-4b50-b335-e9c8202144d8/NIKE+DUNK+LOW+SE.png"
  },
  {
    "modelName": "Nike Dunk Low Retro",
    "price": 12895,
    "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/26c4acd1-385f-48fe-b4c0-8e573671e530/NIKE+DUNK+LOW+RETRO.png"
  },
  {
    "modelName": "Nike SB Dunk Low",
    "price": 9695,
    "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/52e47696-f000-4bb9-a6d3-41aa19220379/NIKE+SB+DUNK+LOW+PRO.png"
  }]
}

document.getElementById('search').addEventListener('click',() => {
  let searchInput = document.getElementById('serach-input').value;
  let element = document.querySelectorAll('.product-name');
  let cards = document.querySelectorAll('.cards');

  element.forEach((element, index)=> {
    if (element.innerText.includes(searchInput.toUpperCase())){
      cards[index].classList.remove('hide');
    }
    else{
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () =>{
  filterProduct("all");
}
