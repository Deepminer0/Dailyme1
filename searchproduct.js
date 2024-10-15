const products = [
    { name: "Tomato", img: "Image/tomatos.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Ftomatos.png&name=Tomato&weight=500g&price=49" },
    { name: "Potato", img: "https://m.media-amazon.com/images/I/313dtY-LOEL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F313dtY-LOEL.jpg&name=Potato&weight=500g&price=49" },
    { name: "Carrot", img: "Image/carrot.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcarrot.png&name=Carrot&weight=500g&price=44" },
    { name: "Brinjle", img: "Image/brinjle.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbrinjle.png&name=Brinjle&weight=500g&price=39" },
    { name: "Spinach", img: "Image/spinach.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fspinach.png&name=Spinach&weight=500g&price=50" },
    { name: "Patal", img: "Image/patal.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fpatal.webp&name=Patal&weight=1kg&price=49" },
    { name: "Onion", img: "Image/onions.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fonions.jpg&name=Onion&weight=1kg&price=60" },
    { name: "Green Mirch", img: "Image/chili.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fchili.jpg&name=Green%20Mirch&weight=100g&price=10" },
    { name: "Shimla Mirch", img: "Image/shimla.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fshimla.jpeg&name=Shimla%20Mirch&weight=500g&price=50" },
    { name: "Nimbu", img: "Image/nimbu.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fnimbu.jpg&name=Nimbu&weight=500g&price=50" },
    { name: "Adrak", img: "Image/adrak.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fadrak.png&name=Adrak&weight=100g&price=20 " },
    { name: "Lauki", img: "Image/kaddu.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fkaddu.jpg&name=Lauki&weight=1pc&price=30" },
    { name: "Karela", img: "Image/karela.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fkarela.jpg&name=Karela&weight=500g&price=30" },
    { name: "Cucumber", img: "Image/cuc.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcuc.webp&name=Cucumber&weight=1kg&price=40" },
    { name: "Cabbage", img: "Image/caba.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcaba.jpeg&name=Cabbage&weight=1kg&price=50" },


    { name: "Apple", img: "Image/apple.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fapple.png&name=Apple&weight=1kg&price=150" },
    { name: "Banana", img: "Image/banana.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbanana.jpeg&name=Banana&weight=1kg&price=40" },
    { name: "Pomegranate", img: "Image/anar.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fanar.png&name=Pomegranate&weight=1kg&price=120" },
    { name: "Papaya", img: "Image/papaya.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fpapaya.webp&name=Papaya&weight=1kg&price=150" },
    { name: "Kiwi", img: "https://www.microgreens.co.in/wp-content/uploads/2020/11/Kiwi-green.png", url: "" },
    { name: "Coconut", img: "https://i5.walmartimages.com/seo/Fresh-Coconut-Each-1-Count_81131765-9311-47ed-ae77-15dddde6b01d.7363231977ed5579d57e0b24cd7c1d9f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF", url: "" },
    { name: "Pineapple", img: "Image/Pineapple.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FPineapple.png&name=Pineapple&weight=1kg&price=120" },
    { name: "Strawberry", img: "Image/Strawberry.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FStrawberry.png&name=Strawberry&weight=1kg&price=120" },
   
   
   
    { name: "Fortune Mustard Oil", img: "Image/oil.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Foil.png&name=Fortune%20Mustard%20Oil&weight=1%20Litre&price=165" },
    { name: "Fortune Mustard Oil", img: "Image/oil.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Foil.png&name=Fortune%20Mustard%20Oil&weight=500ml&price=75" },
    { name: "Fortune Refined Oil Bottle", img: "Image/fortune.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffortune.jpg&name=Fortune%20Refined%20Oil%20Bottle&weight=1%20Litre&price=129" },
    { name: "Fortune Soyabean Oil", img: "Image/spyahealth.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fspyahealth.jpg&name=%20Fortune%20Soyabean%20Oil%20&weight=Pouch%201%20Litre&price=133" },
    { name: "Fortune Premium Kachi Ghani Oil", img: "Image/kachi.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fkachi.webp&name=Fortune%20Premium%20Kachi%20Ghani%20Oil&weight=Pouch%201%20Litre&price=140" },
    { name: "Saffola Active Refined Oil", img: "Image/safolayellow1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fsafolayellow1.webp&name=Saffola%20Active%20Refined%20Oil%20P&weight=Pouch%201%20Litre&price=135" },
    { name: "Saffola Gold Refined Oil", img: "Image/safolayellow.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fsafolayellow.webp&name=Saffola%20Gold%20Refined%20Oil&weight=Pouch%201L&price=145" },
    { name: "Dhara Kachhi Ghani Mustard Oil", img: "https://www.jiomart.com//images/product/240x240/490012733/dhara-kachi-ghani-mustard-oil-1-l-pouch-product-images-o490012733-p490012733-0-202208221752.jpg", url: "" },
    
    
    { name: "Aashirvaad Atta/Godihittu", img: "Image/ashiwadata.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fashiwadata.webp&name=Aashirvaad%20Atta%2FGodihittu%20&weight=5kg&price=245" },
    { name: "Brooke Bond Taaza Tea Pouch", img: "Image/taazagreen.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Ftaazagreen.webp&name=Brooke%20Bond%20Taaza%20Tea%20Pouch&weight=250g%20&price=50" },
    { name: "Tata Namak", img: "Image/salt.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fsalt.png&name=Tata%20Namak%20&weight=1kg&price=24" },
    { name: "Taj Mahal Tea", img: "Image/taj.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Ftaj.png&name=Taj%20Mahal%20Tea%2C%20500%20g&weight=&price=300" },
    { name: "Tata Tea Premium Desh Ki Chai", img: "Image/tatatea.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Ftatatea.webp&name=Tata%20Tea%20Premium%20Desh%20Ki%20Chai&weight=500g&price=220" },
    { name: "Fresh Mung Dal", img: "Image/mung.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fmung.webp&name=Fresh%20Mung%20Dal&weight=1kg&price=90" },
    { name: "Masur Dal", img: "Image/masoor.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fmasoor.webp&name=Masur%20Dal&weight=100g&price=90" },
    { name: "Khula Haldi Powder", img: "Image/haldis.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fhaldis.png&name=Khula%20haldi%20Powder&weight=250g&price=60" },
    { name: "Rahad Daal", img: "Image/rahad.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Frahad.webp&name=Rahad%20daal%20&weight=1kg&price=90" },
    { name: "Chini", img: "Image/chini.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fchini.webp&name=Chini&weight=1k&price=50" },
    { name: "Haldi Powder Packet", img: "Image/haldi.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fhaldi.png&name=Haldi%20Powder%20Packet&weight=200g&price=45" },
    { name: "Patanjali Ghee", img: "Image/ghee.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fghee.png&name=Patanjali%20Ghee&weight=500ml&price=380" },
   
   
   
   
    { name: "Bournvita Nutrition Drink", img: "Image/bournvita.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbournvita.webp&name=Bournvita%20Nutrition%20Drink&weight=1kg&price=410" },
    { name: "Saffola Oats", img: "Image/soats.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fsoats.webp&name=Saffola%20Oats&weight=%20500%20g%20Pouch&price=90" },
    { name: "Junior Horlicks", img: "Image/horlicsjunior.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fhorlicsjunior.webp&name=Junior%20Horlicks%201kg&weight=&price=445" },
    { name: "Horlicks Nutrition Drink - Chocolate", img: "Image/horlicschoco.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fhorlicschoco.webp&name=Horlicks%20Nutrition%20Drink%20-%20Chocolate%2C%201%20kg%20Pouch&weight=&price=380" },
    { name: "Nestle Cerelac Baby Cereal", img: "Image/cerelac.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcerelac.avif&name=Nestle%20Cerelac%20Baby%20Cereal%20&weight=%2012%20To%2024%20330g&price=500" },
    { name: "Nestle Cerelac Baby Cereal, 6 To 24 Mon", img: "Image/cred.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcred.webp&name=Nestle%20Cerelac%20Baby%20Cereal%2C6%20To%2024%20Mon&weight=300g&price=280" },
    { name: "Kellogg's Oats - Low In Sodium", img: "Image/redoats.avif", url: "https://www.dailyy.in/product-details.html?name=Kellogg%27s%20Oats%20-%20Low%20In%20Sodium%2C%20Soluble%20Fibre%2C&price=85&weight=400g&img=Image%2Fredoats.avif" },
    { name: "Quaker Rolled Oats", img: "Image/blueoats.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2Fblueoats.avif&name=Quaker%20Rolled%20Oats%2C%20400%20g%20Pouch&weight=&price=80" },
    { name: "Nestle Cerelac Baby Cereal, 6 to 12 Mon", img: "Image/cbanana.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcbanana.png&name=Nestle%20Cerelac%20Baby%20Cereal%2C%206%20to%2012%20Mon&weight=300g&price=280" },
   
   
   
    { name: "Bingo! Potato Chips - Tomato Flavour", img: "Image/redbingo.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fredbingo.webp&name=%20Bingo!%20Potato%20Chips%20-%20Tomato%20Flavour%2C%2052%20g&weight=&price=20" },
    { name: "Lay's American Style Onion Chips", img: "Image/lays.avif", url: "https://www.dailyy.in/product-details.html?name=Lay%27s%20American%20Style%20Onion%20Chips&price=30&weight=73g&img=Image%2Flays.avif" },
    { name: "LAY'S® Classic Potato Chips", img: "https://m.media-amazon.com/images/I/71axGdrNHoL.jpg", url: "https://www.dailyy.in/product-details.html?name=LAY%27S%C2%AE%20Classic%20Potato%20Chips&price=50&weight=130g&img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71axGdrNHoL.jpg" },
    { name: "Rusk Biscuit", img: "https://www.bigbasket.com/media/uploads/p/xl/312169_15-britannia-bake-rusk-toast.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fxl%2F312169_15-britannia-bake-rusk-toast.jpg&name=Rusk%20Biscuit%20150g&weight=&price=35" },
    { name: "Lays Chile Limon", img: "Image/laysgreen.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2Flaysgreen.avif&name=Lays%20Chile%20Limon%2050gm%20%20&weight=&price=20" },
    { name: "Veg WaiWai", img: "Image/waiwaiveg.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fwaiwaiveg.png&name=Veg%20WaiWai%20&weight=100g&price=20" },
    { name: "Bingo Original Style Potato Chips", img: "Image/bingo.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbingo.webp&name=Bingo%20Original%20Style%20%20Potato%20Chips&weight=100g&price=20" },
    { name: "Lay's Spanish Tomato Tango Potato Chips", img: "https://m.media-amazon.com/images/I/71Af8qfZQUL.jpg", url: "https://www.dailyy.in/product-details.html?name=Lay%27s%20Spanish%20Tomato%20Tango%20Potato%20Chips%2052%20g&price=20&weight=&img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71Af8qfZQUL.jpg" },
    { name: "Act too Popcorn", img: "Image/popcorn.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fpopcorn.webp&name=Act%20too%20Popcorn&weight=100g&price=20" },
    { name: "Doritos Nacho Chips", img: "Image/doritos.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fdoritos.png&name=Doritos%20Nacho%20Chips&weight=100g&price=50" },
    { name: "Maggie", img: "Image/Maggie.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FMaggie.png&name=Maggie&weight=100g&price=20" },
    { name: "Bingo Potato Chips Masala", img: "Image/bbingo.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbbingo.webp&name=Bingo%20Potato%20Chips%20Masala%2C%2052%20g&weight=&price=20" },
    { name: "Bicano Chatpata Mixture", img: "Image/mixture.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fmixture.webp&name=Bicano%20Chatpata%20Mixture&weight=500g&price=70" },
    { name: "Pasta", img: "Image/pasta.avif", url: "" },
    { name: "Haldiram Masala Mixture", img: "Image/haldiram.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fhaldiram.webp&name=Haldiram%20masala%20mixture&weight=200g&price=45" },
  
  
    { name: "Tide Double Power Detergent Washing Powder", img: "Image/tides.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Ftides.webp&name=Tide%20Double%20Power%20Detergent%20Washing%20Powder&weight=1kg&price=110" },
    { name: "Tide Matic Top Load Liquid Detergent", img: "Image/tide2.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Ftide2.png&name=Tide%20Matic%20Top%20Load%20Liquid%20Detergent&weight=850ml&price=170" },
    { name: "Active Wheel Blue Lemon & Jasmine", img: "Image/wheel.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fwheel.webp&name=Active%20Wheel%20Blue%20Lemon%20%26%20Jasmine&weight=1kg&price=36" },
    { name: "Rin Refresh Detergent Powder", img: "Image/rin.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Frin.webp&name=Rin%20Refresh%20Detergent%20Powder&weight=500g&price=56" },
    { name: "Rin Detergent Soap", img: "Image/sabunrin.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fsabunrin.webp&name=Rin%20Detergent%20Soap&weight=110g&price=10" },
    { name: "Blue Harpic", img: "Image/Harpic.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FHarpic.webp&name=Blue%20Harpic&weight=200ml&price=40" },
    { name: "Red Harpic", img: "Image/redharpic.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fredharpic.png&name=Red%20Harpic&weight=200ml&price=50" },
    { name: "Toilet Brush", img: "Image/brsh.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbrsh.webp&name=Toilet%20Brush&weight=1%20piece&price=70" },
    { name: "Vimbar Soap", img: "Image/vimbar.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fvimbar.webp&name=Vimbar%20Soap&weight=130g&price=10" },
    { name: "Vim Liquid", img: "Image/vimliquid.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fvimliquid.webp&name=Vim%20Liquid&weight=500ml&price=125" },
    { name: "Vim Scrubber", img: "Image/scrubber.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fscrubber.png&name=Vim%20scrubber&weight=&price=20" },
    { name: "Steel Scubber", img: "Image/scrubbers.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fscrubbers.webp&name=Steel%20Scubber&weight=&price=20" },
    { name: "Comfort", img: "Image/comforty.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcomforty.webp&name=Comfort%20&weight=500g&price=50" },
    { name: "Pink Dettol Skincare Liquid Handwash", img: "Image/dettol3.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2Fdettol3.avif&name=Pink%20Dettol%20Skincare%20Liquid%20Handwash%20200%20ml&weight=200ml&price=76" },
    { name: "Dettol Original Liquid Handwash", img: "Image/dettol2.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2Fdettol2.avif&name=Dettol%20Original%20Liquid%20Handwash%20250%20ml&weight=250ml&price=139" },
    { name: "Dettol Antiseptic Liquid", img: "Image/dettol1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fdettol1.webp&name=Dettol%20Antiseptic%20Liquid%2C%20550%20ml&weight=&price=155" },
   
   
   
    { name: "Amul Dudh", img: "Image/Amul.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FAmul.avif&name=Amul%20dudh&weight=500g&price=30" },
    { name: "Amul Dudh", img: "Image/Amul.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FAmul.avif&name=Amul%20dudh&weight=1kg&price=30" },
    { name: "Sudha Milk", img: "Image/sudha.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fsudha.png&name=Sudha%20milk&weight=1kg&price=30" },
    { name: "Sudha Milk", img: "Image/sudha.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fsudha.png&name=Sudha%20milk&weight=500g&price=30" },
    { name: "Dahi", img: "Image/dahi.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fdahi.webp&name=Dahi&weight=&price=30" },
    { name: "Chach", img: "Image/chach.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fchach.png&name=Chach&weight=&price=10" },
    { name: "Amul Butter", img: "Image/butter.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbutter.png&name=Amul%20Butter&weight=100g&price=58" },
    { name: "Lassi", img: "Image/lassi.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Flassi.png&name=Lassi&weight=250g&price=30" },
    { name: "Amul Kool", img: "Image/Amulkool.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FAmulkool.png&name=Amul%20Kool&weight=180ml&price=30" },
    { name: "Amul Badam Shake", img: "Image/badamshaker.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbadamshaker.avif&name=Amul%20Badam%20Shake&weight=200ml&price=40" },
    { name: "Sudha Paneer", img: "Image/paneer.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fpaneer.png&name=Sudha%20Paneer&weight=200g&price=85" },
    { name: "Milkmaid", img: "Image/nestle.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fnestle.webp&name=Milkmaid&weight=380g&price=150" },
    { name: "Dabur Honey", img: "Image/honey.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fhoney.webp&name=Dabur%20Honey&weight=100g&price=68" },
    { name: "Patanjali Pure Natural Honey", img: "Image/honeyp.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fhoneyp.png&name=Patanjali%20Pure%20Natural%20Honey%20500%20g&weight=&price=210" },
    
    
    
        { name: "Bajaj Bravo Dlx 500-Watt Mixer Grinder", img: "Image/bartan/mixer1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fmixer1.webp&name=Bajaj%20Bravo%20Dlx%20500-Watt%20Mixer%20Grinder&weight=&price=2999" },
        { name: "BAJAJ 4701 GX 800 Mixer Grinder 4 Jars Red", img: "Image/bartan/Bajabmix.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FBajabmix.jpg&name=BAJAJ%204701%20GX%20800%20Mixer%20Grinder%204%20Jars%20Red&weight=&price=4899" },
        { name: "Bajaj Rex DLX Mixer Grinder 750W", img: "Image/bartan/mixures.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fmixures.jpg&name=Bajaj%20Rex%20DLX%20Mixer%20Grinder%20750W&weight=&price=2999" },
        { name: "BAJAJ Elegance Ninja Purple 500 Mixer Grinder", img: "Image/appliance/51qPc9Lc5L._SL1500_-1.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fappliance%2F51qPc9Lc5L._SL1500_-1.jpg&name=BAJAJ%20Elegance%20Ninja%20Purple%20500%20Mixer%20Grinder%20&weight=&price=2699" },
        { name: "Bajaj Neo Jx4 450-Watt Juice Mixer", img: "Image/bartan/bajajjuicer.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fbajajjuicer.jpg&name=Bajaj%20Neo%20Jx4%20450-Watt%20Juice%20Mixer%20&weight=&price=2799" },
        
        
        { name: "Crompton DS 500 BLK 500-Watt Mixer", img: "https://m.media-amazon.com/images/I/615RCJGmqOL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F615RCJGmqOL._SL1500_.jpg&name=Crompton%20DS%20500%20BLK%20500-Watt%20Mixer%20%20&weight=&price=1899" },
        { name: "Juicer Jar Sets 2pc", img: "https://m.media-amazon.com/images/I/61XFjyYcTaL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61XFjyYcTaL._SL1500_.jpg&name=%20Juicer%20Jar%20Sets%202pc&weight=Juicer&price=499" },
        { name: "Steel Mixer Chutney Jar 350MI", img: "https://m.media-amazon.com/images/I/51asUAVQV5L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51asUAVQV5L._SL1500_.jpg&name=%20Steel%20Mixer%20Chutney%20Jar%20350MI&weight=&price=259" },
        { name: "Mixer Masala Jar set 3pc", img: "https://5.imimg.com/data5/SELLER/Default/2023/9/342945100/PJ/SW/PS/6093690/gigawatts-mixer-grinder-blender-jars-combo-set-stainless-steel-with-transparent-lids.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F9%2F342945100%2FPJ%2FSW%2FPS%2F6093690%2Fgigawatts-mixer-grinder-blender-jars-combo-set-stainless-steel-with-transparent-lids.jpg&name=Mixer%20Masala%20Jar%20set%203pc%20&weight=3pc&price=699" },
        
        
        
        
        
        
        
        { name: "Gas Chulha Stainless Steel", img: "https://3.imimg.com/data3/QX/EL/MY-9739942/one-burner-stove-500x500.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F3.imimg.com%2Fdata3%2FQX%2FEL%2FMY-9739942%2Fone-burner-stove-500x500.jpg&name=Gas%20Chulha%20Stainless%20Steel%20&weight=Single&price=699" },
        { name: "Single Chulha Steel lite", img: "Image/bartan/chulha1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fchulha1.webp&name=Single%20Chulha%20Steel%20lite&weight=Single&price=399" },
        { name: "ISI 2 burner Stainless Steel", img: "Image/bartan/chulha6.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fchulha6.webp&name=ISI%202%20burner%20Stainless%20Steel&weight=Double&price=1299" },
        { name: "S Burnerurya Gas double", img: "Image/bartan/chulha5.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fchulha5.jpg&name=S%20Burnerurya%20Gas%20double%20%20%20&weight=Double&price=1199" },
        { name: "Surya Double Burner Gas Stove", img: "Image/bartan/newburner.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fnewburner.webp&name=Surya%20Double%20Burner%20Gas%20Stove&weight=Double&price=2299" },
        { name: "Surya Flame Double Gas steel", img: "Image/bartan/flame.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fflame.webp&name=Surya%20Flame%20Double%20Gas%20steel&weight=Double&price=1799" },
        { name: "Hotel Gas Chulha Single Blue", img: "Image/bartan/single.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fsingle.jpg&name=Hotel%20Gas%20Chulha%20Single%20Blue&weight=Small&price=1500" },
        { name: "Hotel Gas Chulha Single Black", img: "Image/bartan/single2.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fsingle2.jpg&name=Hotel%20Gas%20Chulha%20Single%20Black&weight=Big&price=1450" },
        { name: "Black Surya Flame Single Burner", img: "Image/bartan/surga.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fsurga.webp&name=Black%20Surya%20Flame%20Single%20Burner&weight=Single&price=2299" },
        { name: "Black Suya Flame Double Burner", img: "Image/bartan/SUryaf.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FSUryaf.webp&name=Black%20Suya%20Flame%20Double%20Burner&weight=Double&price=2599" },
        { name: "Stainless Steel Polished Burner", img: "Image/bartan/streen.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fstreen.webp&name=Stainless%20Steel%20Polished%20Burner&weight=Single&price=2599" },
        { name: "ClimbHigh 5 Mtr ISI LPG Gas pipe", img: "Image/bartan/gas.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fgas.jpg&name=ClimbHigh%205%20Mtr%20ISI%20LPG%20Rubber&weight=Gas%20Rubber&price=150" },
        { name: "Original Gas pipe", img: "Image/bartan/goodflame.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fgoodflame.webp&name=Original%20Gas%20Rubber&weight=Gas%20Rubber&price=150" },
        { name: "Chota Cylinder Regulator", img: "Image/bartan/Regulator.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FRegulator.webp&name=Chota%20Cylinder%20Regulator&weight=Small%20regulator&price=110" },
        { name: "Big Cylinder Regulator", img: "Image/bartan/Regulator1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FRegulator1.webp&name=Big%20Cylinder%20Regulator&weight=BharatGas%20Big%20Regulator&price=499" },
        { name: "Gas Chulha Lighter lite", img: "Image/bartan/lighter.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Flighter.jpg&name=Gas%20Chulha%20Lighter%20lite&weight=Lighter&price=59" },
        { name: "Everyday Steel Lighter", img: "Image/bartan/lighter.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Flighter.png&name=Everyday%20Steel%20Lighter&weight=Everday%20Lighter&price=139" },
       
       
       
        { name: "Prestige 1.5 Litres Electric Kettle", img: "Image/bartan/51Q11RNy8dL._SL1200_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F51Q11RNy8dL._SL1200_.jpg&name=Prestige%201.5%20Litres%20Electric%20Kettle%20&weight=1500%20WATT%20&price=699" },
        { name: "Pigeon Multiuse Kettle 1.2ltr", img: "Image/bartan/41JJWFk14hL._SL1300_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F41JJWFk14hL._SL1300_.jpg&name=Pigeon%20Multiuse%20Kettle%201.2ltr%20&weight=Pigeon&price=899" },
        { name: "Milton Euroline Steel 1.ltr", img: "Image/bartan/61yL5Y7JVaS._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61yL5Y7JVaS._SL1500_.jpg&name=Milton%20Euroline%20Steel%201.ltr&weight=1500%20WATT%20&price=699" },
        { name: "Cello Flipstyle Thermosteel Water Bottle", img: "Image/bartan/cellothu.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fcellothu.jpg&name=Cello%20Flipstyle%20Thermosteel%20Water%20Bottle&weight=1000ml&price=899" },
        { name: "Pigeon Electric Kettle 1.5ltr", img: "Image/bartan/51DGcy8eBCL._SL1080_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F51DGcy8eBCL._SL1080_.jpg&name=Pigeon%20Electric%20Kettle%201.5ltr&weight=Pigeon&price=549" },
        { name: "Cello Swift Thermosteel Water Bottle", img: "Image/bartan/619UcRiJZiL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F619UcRiJZiL._SL1500_.jpg&name=Cello%20Swift%20Thermosteel%20Water%20Bottle&weight=%201000ml&price=949" },
        { name: "Cello Lifestyle Thermosteel Water Bottle", img: "Image/bartan/81elEZiyPfL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F81elEZiyPfL._SL1500_.jpg&name=Cello%20Lifestyle%20Thermosteel%20Water%20Bottle&weight=500ml&price=629" },
        { name: "Cello Swift Stainless Steel Double Walled Flask Bottle", img: "Image/bartan/51z0TKNFFIL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F51z0TKNFFIL._SL1500_.jpg&name=Cello%20Swift%20Stainless%20Steel%20Double%20Walled%20Flask%20Bottle&weight=1500ml&price=1539" },
        { name: "Milton Duo DLX 1000 Thermosteel", img: "Image/bartan/61c-GtJ+0eL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61c-GtJ%2B0eL._SL1500_.jpg&name=Milton%20Duo%20DLX%201000%20Thermosteel&weight=1000ml&price=1135" },
        { name: "Milton Thermosteel Flip Lid Flask", img: "Image/bartan/818jrzDczjL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F818jrzDczjL._SL1500_.jpg&name=Milton%20Thermosteel%20Flip%20Lid%20Flask&weight=1000ml&price=999" },
        { name: "Milton Stellar 8 Thermosteel Water Jug", img: "Image/bartan/71b15oh7EEL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71b15oh7EEL._SL1500_.jpg&name=Milton%20Stellar%208%20Thermosteel%20Water%20Jug&weight=7.6ltr&price=1548" },
        { name: "Milton Thermosteel Plain Lid Flask", img: "Image/bartan/818jrzDczjL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F818jrzDczjL._SL1500_.jpg&name=Milton%20Thermosteel%20Plain%20Lid%20Flask&weight=500ml&price=704" },
       
       
       
       
        { name: "Bajaj DX-2 600W Dry Iron", img: "Image/electronics/71qWUqBp+9L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F71qWUqBp%2B9L._SL1500_.jpg&name=Bajaj%20DX-2%20600W%20Dry%20Iron%20&weight=Bajaj&price=470" },
        { name: "Bajaj DX 2 600-Watt Light", img: "Image/electronics/81g9UkFjanL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F81g9UkFjanL._SL1500_.jpg&name=Bajaj%20DX%202%20600-Watt%20Light%20&weight=Bajaj&price=485" },
        { name: "Bajaj Stainless Steel 1000W Iron", img: "Image/electronics/719Ee07cjcL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F719Ee07cjcL._SL1500_.jpg&name=Bajaj%20Stainless%20Steel%201000W%20Iron&weight=Bajaj&price=660" },
        { name: "Bajaj DX4 Neo 100W", img: "Image/electronics/31zHZhbqSML.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F31zHZhbqSML.jpg&name=Bajaj%20DX4%20Neo%20100W&weight=Bajaj&price=999" },
        { name: "USHA EI Armor 1100 Iron", img: "Image/electronics/710z0pARL8L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F710z0pARL8L._SL1500_.jpg&name=USHA%20EI%20Armor%201100%20Iron&weight=USHA&price=599" },
        { name: "Orient Electric 1000W iron", img: "Image/electronics/61tXmJ0VfUL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F61tXmJ0VfUL._SL1500_.jpg&name=Orient%20Electric%201000W%20%20iron&weight=Orient&price=499" },
        { name: "USHA Steam Pro 1300 W Steam Iron", img: "https://m.media-amazon.com/images/I/81W6gpFY8oL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81W6gpFY8oL._SL1500_.jpg&name=USHA%20Steam%20Pro%201300%20W%20Steam%20Iron%2C&weight=USHA&price=999" },
        { name: "Bajaj Dx-7 1000W Dry Iron", img: "Image/electronics/61Y7QqqpsPL._SL1500_ (1).jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F61Y7QqqpsPL._SL1500_%20(1).jpg&name=Bajaj%20Dx-7%201000W%20Dry%20Iron&weight=Bajaj&price=985" },
       
       
       
        { name: "Bajaj Majesty DX 8 1000-Watt", img: "https://lsmedia.linker-cdn.net/272376/2021/5275873.png?width=1200&height=1125", url: "" },
        { name: "Bajaj Frore 1200 mm 48 1 star Rated Ceiling Fans", img: "Image/electronics/51eRlRen8DL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F51eRlRen8DL._SL1500_.jpg&name=Bajaj%20Frore%201200%20mm%2048%201%20star%20Rated%20Ceiling%20Fans%20%20&weight=&price=1499" },
        { name: "Orient Electric Apex-FX Ceiling Fan | 1200mm", img: "Image/electronics/61CwkCxvECL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F61CwkCxvECL._SL1500_.jpg&name=Orient%20Electric%20Apex-FX%20Ceiling%20Fan%20%7C%201200mm&weight=&price=1499" },
        { name: "Crompton SUREBREEZE SEA SAPPHIRA 1200 mm Ceiling Fan", img: "Image/electronics/41APqPHuqtL._SL1000_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F41APqPHuqtL._SL1000_.jpg&name=Crompton%20SUREBREEZE%20SEA%20SAPPHIRA%201200%20mm%20Ceiling%20Fan%20&weight=&price=1399" },
        { name: "Orient Electric 1200 mm Pacific Air Déco", img: "Image/electronics/51pSImZoO3L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F51pSImZoO3L._SL1500_.jpg&name=Orient%20Electric%201200%20mm%20Pacific%20Air%20D%C3%A9co&weight=&price=1749" },
        { name: "Havells 1200mm Mozel ES Ceiling Fan", img: "Image/electronics/31ndAbJqAhL._SL1105_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F31ndAbJqAhL._SL1105_.jpg&name=Havells%201200mm%20Mozel%20ES%20Ceiling%20Fan%20&weight=&price=1699" },
        { name: "Bajaj Maxima 600 mm Ceiling Fans for Home", img: "Image/electronics/51W6gs79HyL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Felectronics%2F51W6gs79HyL._SL1500_.jpg&name=Bajaj%20Maxima%20600%20mm%20Ceiling%20Fans%20for%20Home%20&weight=&price=1550" },
     
     
     
     
     
        { name: "Kutchina Pristine 30L Air Cooler", img: "Image/electronics/61HoTgYzq8L._SL1500_.jpg", url: "" },
        { name: "Havells Cool A 75-Litre Air Cooler", img: "Image/electronics/41dQFPAPcrL._SL1500_.jpg", url: "" },
        { name: "Symphony Ice Cube 27 L Air Cooler", img: "Image/electronics/31o8fX44HuL._SL1500_.jpg", url: "" },
        { name: "Bajaj TC2000 20-Litre Air Cooler", img: "Image/electronics/61dBRBYl8rL._SL1500_.jpg", url: "" },
        { name: "Havells Celia 50-Litre Air Cooler", img: "Image/electronics/71zG-R1BoKL._SL1500_.jpg", url: "" },
        { name: "Symphony Diet 22T 22-Litre Air Cooler", img: "Image/electronics/61FOThLRnDL._SL1500_.jpg", url: "" },
        { name: "Havells Freshia 70 L Tower Cooler", img: "Image/electronics/71Kc5AGs4tL._SL1500_.jpg", url: "" },
        { name: "Symphony Ice Cube 27 L Tower Air Cooler", img: "Image/electronics/71uTMLsH-pL._SL1500_.jpg", url: "" },
        { name: "Crompton Greaves 40-Litre Air Cooler", img: "Image/electronics/71iLFQOH-jL._SL1500_.jpg", url: "" },



      { name: "Cello Pink Design Hotpot", img: "Image/bartan/cello1.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fcello1.jpg&name=Cello%20Pink%20Design%20Hotpot%20%20&weight=&price=269" },
      { name: "Hot chef red hotpot", img: "Image/bartan/cello14.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fcello14.jpeg&name=Hot%20chef%20red%20hotpot%20&weight=&price=299" },
      { name: "Cello Metallic Black Hotpot 3000", img: "Image/bartan/15.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F15.webp&name=Cello%20Metallic%20Black%20Hotpot%203000%20%20&weight=&price=499" },
      { name: "Cello Hotpot Stainless Steel", img: "Image/bartan/hotpot.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fhotpot.png&name=Cello%20Hotpot%20Stenless%20still%20%20&weight=&price=599" },
      { name: "Hot chef Green Hotpot", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc40tXaFKiwHu50QLSU-cxpXIerWyRoxbocZXc4z4Qav7YvqXaLIsT8FHO92M1d_6vWcc&usqp=CAU", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSc40tXaFKiwHu50QLSU-cxpXIerWyRoxbocZXc4z4Qav7YvqXaLIsT8FHO92M1d_6vWcc%26usqp%3DCAU&name=Hot%20chef%20Green%20Hotpot%20%20&weight=&price=499" },
      { name: "Cello Blue Hotpot Sephire", img: "Image/bartan/celllos.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fcelllos.jpg&name=Cello%20Blue%20Hotpot%20Sephire%20&weight=&price=269" },
      { name: "Cello Blue Hotpot Sephire", img: "Image/bartan/celllos.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fcelllos.jpg&name=Cello%20Blue%20Hotpot%20Sephire%20&weight=&price=269" },
      
     
     
      { name: "Hawkins 5 ltr Classic Cooker", img: "Image/bartan/hawkins.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fhawkins.jpg&name=%20Hawkins%205%20ltr%20Classic%20Cooker&weight=Hawkins&price=1939" },
      { name: "Hawkins 1.5 ltr Classic Cooker", img: "Image/bartan/hakis.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fhakis.webp&name=%20Hawkins%201.5%20ltr%20Classic%20Cooker&weight=Hawkins&price=1059" },
      { name: "Hawkins 1.5 ltr Classic Cooker", img: "Image/bartan/ha3.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fha3.jpg&name=%20Hawkins%201.5%20ltr%20Classic%20Cooker&weight=Hawkins&price=1489" },
      { name: "Hawkins 3 ltr Contura Black", img: "Image/bartan/centura.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fcentura.jpeg&name=Hawkins%203%20ltr%20Contura%20Black%20%20&weight=Hawkins&price=199" },
      { name: "Hawkins 3 ltr Black Insta", img: "Image/bartan/blackhaw.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fblackhaw.webp&name=Hawkins%203%20ltr%20%20Black%20Insta%20%20&weight=Hawkins&price=2235" },
      { name: "Hawkins 3.5 Litre Contura Black", img: "Image/bartan/Hawkinds.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FHawkinds.jpg&name=Hawkins%203.5%20Litre%20Contura%20Black%20%2C%20&weight=Hawkins&price=2179" },
      { name: "Hawkins Contura Aluminium 3 Litre", img: "Image/bartan/red.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fred.jpg&name=%20Hawkins%20Contura%20Aluminium%203%20Litre%20&weight=Hawkins&price=2139" },
      { name: "Bajaj PCX 2 Majesty 2 Litres", img: "Image/bartan/bajaj.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fbajaj.jpg&name=%20Bajaj%20PCX%202%20Majesty%202%20Litres&weight=Bajaj&price=999" },
      { name: "Pigeon by Stovekraft 3 Litre", img: "Image/bartan/pigeon3.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fpigeon3.jpg&name=%20Pigeon%20by%20Stovekraft%203%20Litre&weight=Pegion&price=759" },
      { name: "Prestige 3 ltr Classic Cooker", img: "Image/bartan/prestige.jpg", url: "" },
      { name: "Prestige Svachh 3 ltr Red Handi", img: "Image/bartan/Prestigecolor.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FPrestigecolor.jpg&name=Prestige%20Svachh%203%20ltr%20Red%20Handi&weight=Prestige&price=1489" },
      { name: "Prestige Svachh 1.5 ltr Cooker", img: "Image/bartan/Prestige15.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FPrestige15.jpg&name=Prestige%20Svachh1%205%20ltr%20Cooker&weight=Prestige&price=1518" },
      { name: "Prestige 3 ltr Classic Cooker", img: "Image/bartan/Prestige4.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FPrestige4.jpg&name=Prestige%203%20ltr%20Classic%20Cooker&weight=Prestige&price=2029" },
      { name: "Prestige 5 ltr Classic Cooker", img: "Image/bartan/prestige5.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fprestige5.jpg&name=Prestige%205%20ltr%20Classic%20Cooker&weight=Prestige&price=1899" },
      { name: "Bajaj New Shakti 3 Litres", img: "Image/bartan/bajaj1.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fbajaj1.jpg&name=Bajaj%20New%20Shakti%203%20Litres&weight=Bajaj&price=909" },
      { name: "Bajaj PCX 65D Aluminium 5 ltr", img: "Image/bartan/Bajajhandi.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FBajajhandi.jpg&name=Bajaj%20PCX%2065D%20Aluminium%205%20ltr&weight=Bajaj&price=2525" },
      { name: "Hotlinks 5 ltr Pressure Cooker", img: "Image/bartan/hotlinks.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fhotlinks.webp&name=hotlinks%205%20ltr%20Pressure%20cooker&weight=Hotlinks&price=1300" },
      { name: "Hotlinks 3 ltr Pressure Cooker", img: "Image/bartan/hotlinks.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fhotlinks.webp&name=hotlinks%203%20ltr%20Pressure%20cooker&weight=Hotlinks&price=799" },
      { name: "United Pressure Cooker 5 Litre", img: "Image/bartan/united.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Funited.jpg&name=%20United%20Pressure%20Cooker%205%20Litre%2C&weight=United&price=1526" },
      { name: "United Pressure Cooker 3 Litre", img: "Image/bartan/united.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Funited.jpg&name=%20United%20Pressure%20Cooker%203%20Litre%2C&weight=United&price=1259" },

    
      
      { name: "Plain Steel Glass 2pc", img: "Image/bartan/plainglass.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fplainglass.jpeg&name=Plain%20Steel%20Glass%202pc&weight=Plain%20Heavy&price=99" },
      { name: "Lite Fancy Glass 2pc", img: "Image/bartan/lite.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Flite.jpg&name=Lite%20Fancy%20Glass%202pc&weight=Light%20Strip&price=79" },
      { name: "Plain Heavy Steel Glass 2pc", img: "Image/bartan/plainglasss.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fplainglasss.jpeg&name=Plain%20Heavy%20Steel%20Glass%202pc&weight=Plain%20Heavy&price=119" },
      { name: "Design Glass Curve 2pc", img: "Image/bartan/designglas.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fdesignglas.webp&name=Design%20Glass%20Curve%202pc&weight=Curve%20Plain&price=119" },
      { name: "Damru Steel Glass 6pc", img: "Image/bartan/curve6pc.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fcurve6pc.webp&name=Damru%20Steel%20Glass%206pc&weight=Damru%20Strip&price=220" },
      { name: "Plain Stylish curve Glass", img: "Image/bartan/plaincurveline.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fplaincurveline.webp&name=Plain%20Stylish%20curve%20Glass&weight=Stylish%20Curve&price=49" },
      { name: "Pendulam Design Stell Glass", img: "Image/bartan/Glassmine.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FGlassmine.webp&name=Pendulam%20Design%20Stell%20Glass&weight=Pendulam%20Design&price=49" },
      { name: "Heavy Plain Stell Glass", img: "Image/bartan/simple.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fsimple.jpeg&name=Heavy%20Plain%20Stell%20Glass&weight=Heavy%20Plain&price=49" },
      { name: "Steel Design Glass 6pc", img: "Image/bartan/glass6.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fglass6.jpg&name=Steel%20Design%20Glass%206pc%20&weight=Straight%20Design&price=239" },
      { name: "Small Tea Glass 6pc", img: "Image/bartan/glassme.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fglassme.webp&name=Small%20Tea%20Glass%206pc&weight=Small%20Size%20strip&price=99" },
      { name: "Steel Lining Heavy Glass", img: "Image/bartan/lineglass.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Flineglass.webp&name=Steel%20Lining%20Heavy%20Glass&weight=Damru%20Line%20Heavy&price=59" },
      { name: "Small Steel Glass Strip", img: "Image/bartan/Smalllglass.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FSmalllglass.webp&name=Small%20Steel%20Glass%20Strip&weight=Strip%20Design&price=19" },
    

    
      { name: "Tamba Jug Classic", img: "Image/bartan/tamba.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Ftamba.webp&name=Tamba%20Jug%20Classic&weight=1000ml&price=699" },
      { name: "Tamba Jug Classic", img: "Image/bartan/61NclCSNoUL._SL1280_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61NclCSNoUL._SL1280_.jpg&name=Tamba%20Jug%20Classic%20&weight=2ltr&price=1150" },
      { name: "Tamba Jug Classic", img: "Image/bartan/61NclCSNoUL._SL1280_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61NclCSNoUL._SL1280_.jpg&name=Tamba%20Jug%20Classic%20&weight=1000ml&price=899" },
      { name: "Tamba Jug Classic", img: "Image/bartan/61NclCSNoUL._SL1280_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61NclCSNoUL._SL1280_.jpg&name=Tamba%20Jug%20Classic%20&weight=750ml&price=799" },
      { name: "Tamba Thermus Classic", img: "Image/bartan/stree-shine-copper-items-6-500x500.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fstree-shine-copper-items-6-500x500.webp&name=Tamba%20Thermus%20Classic%20&weight=1000ml&price=900" },
      { name: "Tamba Glass Natural", img: "Image/bartan/plain-copper-glass-500x500.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fplain-copper-glass-500x500.webp&name=Tamba%20Glass%20Natural&weight=Glass&price=80" },
      { name: "Tamba Lota", img: "Image/bartan/loti.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Floti.jpg&name=Tamba%20Lota&weight=Big%20size&price=399" },
      { name: "Tamba Lota", img: "Image/bartan/bdUf6SKiDS.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FbdUf6SKiDS.jpg&name=Tamba%20Lota%20&weight=Medium%20size&price=229" },
      { name: "Small Tamba Lota", img: "Image/bartan/71N5ha684YS.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71N5ha684YS.jpg&name=Small%20Tamba%20Lota&weight=Small%20Size&price=89" },
      { name: "Tamba Katori classic", img: "Image/bartan/tambaka.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Ftambaka.jpg&name=Tamba%20Katori%20classic%20&weight=Small%20size&price=50" },
    
      
      { name: "Kuber Brass Diya for Puja", img: "Image/bartan/51sZMdKthPL.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F51sZMdKthPL.jpg&name=Kuber%20Brass%20Diya%20for%20Puja&weight=2pc&price=150" },
      { name: "Kuber Brass Diya for Puja", img: "Image/bartan/71EjosCftJL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71EjosCftJL._SL1500_.jpg&name=Kuber%20Brass%20Diya%20for%20Puja&weight=2pc&price=150" },
      { name: "Narayan Dia Akhand", img: "Image/bartan/51dSg0KNKPL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F51dSg0KNKPL._SL1500_.jpg&name=Narayan%20Dia%20Akhand%20&weight=100g%2F1pc&price=199" },
      { name: "Nitya Pyali Puja Diya", img: "Image/bartan/41Pa0rRjP1L._SL1100_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F41Pa0rRjP1L._SL1100_.jpg&name=%20Nitya%20Pyali%20Puja%20Diya%20&weight=74gm%20%2F1pc&price=139" },
      { name: "Brass Devdas Diya Oil Puja", img: "Image/bartan/61WjFzyw7ML._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61WjFzyw7ML._SL1500_.jpg&name=%20Brass%20Devdas%20Diya%20Oil%20Puja&weight=1pc&price=160" },
      { name: "Traditional Kerala Brass Ghee Diya", img: "Image/bartan/51wzG9AB+ZL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F51wzG9AB%2BZL._SL1500_.jpg&name=Traditional%20Kerala%20Brass%20Ghee%20Diya&weight=1pc&price=499" },
      { name: "Kuber Diya with stand", img: "Image/bartan/51wtF2vliPL.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F51wtF2vliPL.jpg&name=%20Kuber%20Diya%20with%20stand%20&weight=1pc&price=199" },
      { name: "Pital Small Size Diya", img: "Image/bartan/31+rVneg9mS.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F31%2BrVneg9mS.jpg&name=%20Pital%20Small%20Size%20Diya&weight=1pc&price=60" },
      { name: "Pital Small Size Diya", img: "Image/bartan/71eEssruV-L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71eEssruV-L._SL1500_.jpg&name=%20Pital%20Small%20Size%20Diya&weight=2pc&price=100" },
      { name: "Pure Brass & Wooden Dupdani", img: "Image/bartan/dupdan.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fdupdan.jpg&name=%20Pure%20Brass%20%26%20Wooden%20Dupdani&weight=Big%20size&price=250" },
      { name: "Premium Muradabadi Glass Design", img: "Image/bartan/glassleft.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fglassleft.png&name=Premium%20Muradabadi%20Glass%20Design%20&weight=Heavy%20material%2F1pc&price=249" },
      { name: "Pure Brass Jug Classic", img: "Image/bartan/61c3hzsDnFL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61c3hzsDnFL._SL1500_.jpg&name=Pure%20Brass%20Jug%20Classic%20&weight=1000ml&price=899" },
      { name: "Premium Colorful Muradabadi Glass", img: "Image/bartan/41GraHGuvTL._AC_UF894,1000_QL80_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F41GraHGuvTL._AC_UF894%2C1000_QL80_.jpg&name=Premium%20Colorful%20Muradabadi%20Glass%20&weight=Heavy%20material%2F1pc&price=180" },
      { name: "Puja Pital Chota size", img: "Image/bartan/51xt97fyfTL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F51xt97fyfTL._SL1500_.jpg&name=Puja%20Pital%20Chota%20size%20%20&weight=2pc&price=59" },
      { name: "Swastik Akhand Jotyi (Small)", img: "Image/bartan/71qN0bxAjvL._SL1500_-removebg-preview.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71qN0bxAjvL._SL1500_-removebg-preview.png&name=%20Swastik%20Akhand%20Jotyi&weight=Small&price=180" },
      { name: "Swastik Akhand Jotyi (Medium)", img: "Image/bartan/71qN0bxAjvL._SL1500_-removebg-preview.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71qN0bxAjvL._SL1500_-removebg-preview.png&name=%20Swastik%20Akhand%20Jotyi&weight=Medium&price=250" },
      { name: "Swastik Akhand Jotyi (Big)", img: "Image/bartan/71qN0bxAjvL._SL1500_-removebg-preview.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71qN0bxAjvL._SL1500_-removebg-preview.png&name=%20Swastik%20Akhand%20Jotyi&weight=Big&price=320" },
      { name: "Big Brass Panch Aarti Diya", img: "Image/bartan/71tafHcHgrL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71tafHcHgrL._SL1500_.jpg&name=Big%20Brass%20Panch%20Aarti%20Diya%20%20&weight=1pc&price=379" },
      { name: "Peetal Puja Diya with Handle", img: "Image/bartan/71PPL5uj2yL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71PPL5uj2yL._SL1500_.jpg&name=%20Peetal%20Puja%20Diya%20with%20Handle&weight=1pc&price=289" },
      { name: "Pure Brass Bell Pooja (Small)", img: "Image/bartan/61M9DlfnpzL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61M9DlfnpzL._SL1500_.jpg&name=%20Pure%20Brass%20Bell%20Pooja&weight=Small%2F1pc&price=159" },
      { name: "Pure Brass Bell Pooja (Big)", img: "Image/bartan/61M9DlfnpzL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61M9DlfnpzL._SL1500_.jpg&name=%20Pure%20Brass%20Bell%20Pooja&weight=Big%2F1pc&price=289" },
      { name: "Kanshita's Brass Diya", img: "Image/bartan/71bjjEIMQJL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?name=Kanshita%27s%20%20Brass%20Diya%20&price=499&weight=Heavy%2F6pc&img=Image%2Fbartan%2F71bjjEIMQJL._SL1500_.jpg" },
      { name: "Brass Diya with Tall Stand", img: "Image/bartan/713ITArT4wL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F713ITArT4wL._SL1500_.jpg&name=%20Brass%20Diya%20with%20Tall%20Stand&weight=1pc&price=599" },
      { name: "Pure Pital Laxmi Ganesh Murti", img: "Image/bartan/61bU8k+MqnL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61bU8k%2BMqnL._SL1500_.jpg&name=Pure%20Pital%20Laxmi%20Ganesh%20%20&weight=7CM&price=799" },
      { name: "Pure Brass Laxmi Ganesh Murti", img: "Image/bartan/laxmiganeh.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Flaxmiganeh.jpg&name=%20Pure%20Brass%20Laxmi%20Ganesh%20Decor%20&weight=1set&price=1049" },
      { name: "Laxmi Ganesh Small set", img: "Image/bartan/laxmigameshhh.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Flaxmigameshhh.jpg&name=%20Laxmi%20Ganesh%20Small%20set&weight=1set&price=399" },
      { name: "Heavy Pure Pital Puja Thali", img: "Image/bartan/tha.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Ftha.webp&name=%20Heavy%20Pure%20Pital%20Puja%20Thali%20&weight=Heavy%20material&price=999" },
      { name: "Pure Heavy Brass Singhasan (12CM)", img: "Image/bartan/71kHIc-pipL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71kHIc-pipL._SL1500_.jpg&name=Pure%20Heavy%20Brass%20Singhasan%20%20&weight=12CM&price=499" },
      { name: "Pure Heavy Brass Singhasan (16CM)", img: "Image/bartan/71kHIc-pipL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71kHIc-pipL._SL1500_.jpg&name=Pure%20Heavy%20Brass%20Singhasan%20%20&weight=16CM&price=599" },
      { name: "Pure Heavy Brass Singhasan (12CM)", img: "Image/bartan/61fF02uEO5L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61fF02uEO5L._SL1500_.jpg&name=Pure%20Heavy%20Brass%20Singhasan%20%20&weight=12CM&price=999" },
      { name: "Heavy Brass big Singhasan", img: "Image/bartan/71mp4B9bjmL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71mp4B9bjmL._SL1500_.jpg&name=Heavy%20Brass%20big%20Singhasan%20&weight=5X4%20inch&price=499" },
      { name: "Small Pure Brass Agardan for Puja", img: "Image/bartan/61TuD4kI4-L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61TuD4kI4-L._SL1500_.jpg&name=%20Small%20Pure%20Brass%20Agardan%20for%20Puja&weight=1pc&price=69" },
      { name: "Agardani Pure Heavy Brass", img: "Image/bartan/dias.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fdias.png&name=%20Agardani%20Pure%20Heavy%20Brass&weight=1pc&price=250" },
      { name: "Golden Brass Puja Tokri (Small size)", img: "Image/bartan/brass-flower-basket-for-puja.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fbrass-flower-basket-for-puja.jpg&name=Golden%20Brass%20Puja%20Tokri&weight=Heavy%20Material%2F%20Small%20size&price=399" },
      { name: "Golden Brass Puja Tokri (Big size)", img: "Image/bartan/brass-flower-basket-for-puja.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fbrass-flower-basket-for-puja.jpg&name=Golden%20Brass%20Puja%20Tokri&weight=Heavy%20Material%2F%20Big%20size&price=499" },
      { name: "Pure Brass Circle Puja Tokri", img: "Image/bartan/brass-round-mini-flower-basket-500x500.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fbrass-round-mini-flower-basket-500x500.webp&name=%20Pure%20Brass%20Cirlce%20Puja%20Tokri&weight=Heavy%20material%20%2F1pc&price=" },
      { name: "Round Brass Pooja Tokri", img: "Image/bartan/brass-pooja-flower-basket-1000x1000.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fbrass-pooja-flower-basket-1000x1000.webp&name=Round%20Brass%20Pooja%20Tokri%20&weight=Heavy%20Material&price=" },
      { name: "Pure Pital Puja Balti", img: "Image/bartan/brassbucketforservingfoodhokoya_1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fbrassbucketforservingfoodhokoya_1.webp&name=%20Pure%20Pital%20Puja%20Balti%20&weight=Small%20Size&price=599" },
      { name: "Pure pital Puja Lotni", img: "Image/bartan/71XMcZyS8wL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F71XMcZyS8wL._SL1500_.jpg&name=%20Pure%20pital%20Puja%20Lotni&weight=Small%20Size&price=69" },
      { name: "Brass Heavy Crystal Small Lota", img: "Image/bartan/714JCXz1gSL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F714JCXz1gSL._SL1500_.jpg&name=%20Brass%20Heavy%20Crystal%20Small%20Lota&weight=Small%20size&price=329" },
      { name: "Brass lota Pooja Item", img: "Image/bartan/6166I7yCYzL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F6166I7yCYzL._SL1500_.jpg&name=%20Brass%20lota%20Pooja%20Item%20&weight=Heavy%20material&price=369" },
      { name: "Navyaksh Brass Lota Kalash", img: "Image/bartan/41Haw2s7QCL.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F41Haw2s7QCL.jpg&name=%20Navyaksh%20Brass%20Lota%20Kalash&weight=1pc&price=289" },
      { name: "Brass Design Muradabadi", img: "Image/bartan/brassloa.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fbrassloa.jpg&name=Brass%20Design%20Muradabadi%20&weight=Small%20size&price=259" },
      { name: "Pital Plate for Worship", img: "Image/bartan/91k38If-jVL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F91k38If-jVL._SL1500_.jpg&name=%20Bhog%20Thali%20for%20Worship&weight=Heavy%20Material&price=239" },
     
     
     
    
      { name: "Dabba Stainless Steel 5kg", img: "Image/bartan/61WnXl6i7tL.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61WnXl6i7tL.jpg&name=Dabba%20Stainless%20Steel%205kg&weight=5Kg%20Capacity&price=350" },
      { name: "Dabba Stainless Steel Small Set", img: "Image/bartan/chota.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fchota.webp&name=Dabba%20Stainless%20Steel%20Small%20Set&weight=Masala%20Box&price=259" },
      { name: "Plain Stainless Puri Dabba", img: "Image/bartan/puri-dabba-large-4.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fpuri-dabba-large-4.webp&name=%20Plain%20Stainless%20Puri%20Dabba%20&weight=Medium%20Size&price=150" },
      { name: "Plain Stainless Cover Puri Dabba", img: "Image/bartan/dghfh.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fdghfh.jpeg&name=Plain%20Stainless%20Cover%20Puri%20Dabba&weight=STeel%20Dabba&price=160" },
      { name: "Stainless Steel Dabba", img: "Image/bartan/steel-dabba-589.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fsteel-dabba-589.webp&name=Stainless%20Steel%20Dabba%20&weight=3Kg%20Capacity&price=280" },
      { name: "Halka Puri Dabba", img: "Image/bartan/dabba.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fdabba.webp&name=Halka%20Puri%20Dabba%20&weight=Medium%20Size%20&price=80" },
      
      { name: "Lux box 3 Tier Container", img: "Image/bartan/Tiffin.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FTiffin.png&name=Lux%20box%203%20Tier%20Container&weight=Strong%20Steel&price=249" },
      { name: "Lux box 5 Tier Container", img: "Image/bartan/1M0A8956.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F1M0A8956.webp&name=Lux%20box%205%20Tier%20Container&weight=Strong%20Steel&price=359" },
      { name: "Lux box 4 Tier Container", img: "Image/bartan/1M0A8966.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F1M0A8966.webp&name=Lux%20box%204%20Tier%20Container&weight=Strong%20Steel&price=329" },
      { name: "Lunch Box Tier Container", img: "Image/bartan/11.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F11.webp&name=Lunch%20Box%20Tier%20Container&weight=Strong%20Steel&price=190" },
      { name: "Lux box 1 Layer for kids", img: "Image/bartan/765548.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F765548.webp&name=Lux%20box%201%20Layer%20for%20kids&weight=Sqaure%20Shape&price=240" },
      { name: "Lux box classic for kids", img: "Image/bartan/51944-1_24ALDGMD.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F51944-1_24ALDGMD.webp&name=Lux%20box%20classic%20for%20kids&weight=Oval%20Shape&price=279" },
      { name: "Lux box Single Circle for kids", img: "Image/bartan/77307-1_2K4T60FA.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F77307-1_2K4T60FA.jpg&name=Lux%20box%20Single%20Circle%20for%20kids&weight=1%20tier%20circle&price=249" },
      { name: "Rectangle lux box for kids", img: "Image/bartan/qq.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fqq.webp&name=Rectangle%20lux%20box%20for%20kids&weight=Stainless%20Steel&price=299" },
      { name: "4 Container Bombay Tiffin", img: "Image/bartan/1_a2b0c13b-a533-472b-b4c5-032c6e68a9bb.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F1_a2b0c13b-a533-472b-b4c5-032c6e68a9bb.webp&name=4%20Container%20Bombay%20Tiffin&weight=Stainless%20STeel&price=559" },
      { name: "3 Container Bombay Tiffin", img: "Image/bartan/45.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F45.webp&name=4%20Container%20Bombay%20Tiffin&weight=Stainless%20STeel&price=449" },
      { name: "2 Container Bombay Tiffin", img: "Image/bartan/DC1985_1_1.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2FDC1985_1_1.jpg&name=2%20Container%20Bombay%20Tiffin&weight=Stainless%20STeel&price=299" },
      { name: "Halka Puri Dabba", img: "Image/bartan/dabba.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Fdabba.webp&name=Halka%20Puri%20Dabba%20&weight=Medium%20Size%20&price=89" },
      
      { name: "Dettol Liquid 550ml", img: "Image/dettol1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fdettol1.webp&name=Dettol%20Liquid&weight=550ml&price=225" },
      { name: "Dettol Liquid 125ml", img: "Image/dettol1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fdettol1.webp&name=LDettol%20iquid&weight=125ml&price=75" },
      { name: "Dettol Liquid 250ml", img: "Image/dettol1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Fdettol1.webp&name=Dettol%20Liquid&weight=250ml&price=145" },
      { name: "Dettol Handwash Dispenser Bottle Pump 200ml", img: "Image/Clinic/Handwash1.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FHandwash1.png&name=Dettol%20Handwash%20Dispenser%20Bottle%20Pump%20200ml&weight=&price=76" },
      { name: "Dettol Skincare Liquid Handwash 200 ml", img: "Image/Clinic/Handwash2.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FHandwash2.png&name=Dettol%20Skincare%20Liquid%20Handwash%20200%20ml&weight=&price=95" },
      { name: "Dettol Liquid Handwash refill 675ml", img: "Image/Clinic/refil1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Frefil1.webp&name=Dettol%20Liquid%20Handwash%20refill%20675ml&weight=&price=92" },
      { name: "Dettol SKincare Handwash refill 175ml", img: "Image/Clinic/refil2.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Frefil2.avif&name=Dettol%20SKincare%20Handwash%20refill%20175ml&weight=&price=45" },
    
      { name: "VapoRub", img: "https://5.imimg.com/data5/SELLER/Default/2020/12/ML/UY/TV/88462799/vicks-vaporub.jpg", url: "https://www.dailyy.in/product-details.html?name=VapoRub%20&price=75&weight=25ml&img=Image%2FClinic%2FVicks.webp" },
      { name: "Spray", img: "Image/Clinic/moov.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fmoov.webp&name=Spray&weight=35g&price=158" },
      { name: "Inhaler", img: "Image/Clinic/Vicksinhaler.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FVicksinhaler.webp&name=Inhaler&weight=0.5ml&price=54" },
      { name: "Moov Cream", img: "Image/Clinic/moovcream.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fmoovcream.png&name=&weight=50g&price=191" },
      { name: "Tulsi Cough Drops", img: "Image/Clinic/ch1.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fch1.png&name=Cough%20Drops&weight=5pc&price=5" },
      { name: "Honey Cough Drops", img: "Image/Clinic/ch2.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fch2.png&name=Cough%20Drops&weight=5pc&price=5" },
      { name: "Ginger Cough Drops", img: "Image/Clinic/ch3.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fch3.png&name=Cough%20Drops&weight=5pc&price=5" },
      { name: "Volini Spray", img: "Image/Clinic/volini.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fvolini.webp&name=Spray&weight=&price=" },
      { name: "Volini Gel", img: "Image/Clinic/vcream.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fvcream.png&name=Volini%20Gel&weight=&price=" },
    //   { name: "Strepsils 8pc", img: "Image/Clinic/Strepsils.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FStrepsils.webp&name=Stripsils&weight=8pc&price=52" },
      { name: "Strepsils", img: "Image/Clinic/strepsils1.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fstrepsils1.png&name=Stripsils&weight=8pc&price=52" },
    
    
    
      { name: "Bandage", img: "Image/Clinic/Bandage.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FBandage.png&name=Bandage&weight=10CM&price=100" },
      { name: "Bandage", img: "Image/Clinic/Bandageh.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FBandageh.png&name=Bandage&weight=10CM&price=150" },
      { name: "HansaPlast", img: "Image/lights/Hansaplast.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2Flights%2FHansaplast.webp&name=HansaPlast&weight=20p&price=50" },
      { name: "HansaPlast", img: "Image/Clinic/Hasnsaplast.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FHasnsaplast.png&name=HansaPlast&weight=1pc&price=3" },
      { name: "White Bandage", img: "Image/Clinic/Whitebandage.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FWhitebandage.jpg&name=White%20Bandage&weight=1pc&price=50" },
      { name: "Wrist Bandage", img: "Image/Clinic/Handbandage.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FHandbandage.png&name=Wrist%20Bandage&weight=1p&price=160" },
      { name: "Arm Bandage", img: "Image/Clinic/elasticbandages.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Felasticbandages.png&name=Arm%20Bandage&weight=1p&price=154" },
      { name: "Knee Bandage", img: "Image/Clinic/knee.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fknee.png&name=Knee%20Bandage&weight=1p&price=150" },
     
     
     
      { name: "Dabar 2X ChawanPrash", img: "Image/Clinic/chawanprash.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fchawanprash.png&name=%20Dabar%202X%20ChawanPrash&weight=950g&price=335" },
      { name: "Patanjali ChawanPrash", img: "Image/Clinic/pchawan.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fpchawan.png&name=Patanjali%20ChawanPrash&weight=500g&price=180" },
      { name: "Zandu ChandraPrash", img: "Image/Clinic/zandu.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fzandu.png&name=Zandu%20ChandraPrash&weight=450g&price=209" },
      { name: "Dabar 2X ChawanPrash", img: "Image/Clinic/chawanprash.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fchawanprash.png&name=Dabar%202X%20ChawanPrash&weight=500g&price=219" },
      { name: "Zandu ChandraPrash", img: "Image/Clinic/zandu.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fzandu.png&name=Zandu%20ChandraPrash&weight=900g&price=374" },
      { name: "BaidhNath ChawanPrash", img: "Image/Clinic/Baidh.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FBaidh.webp&name=BaidhNath%20ChawanPrash&weight=950g&price=279" },
      
      
      { name: "Whisper Hygiene Comfort XL", img: "Image/Clinic/wishper.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fwishper.avif&name=Wishper%20Hygene%20Comfort%20XL&weight=50p&price=500" },
      { name: "Whisper Choice Ultra", img: "Image/Clinic/Wshiperorange.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FWshiperorange.webp&name=Whisper%20Choice%20Ultra&weight=20p&price=160" },
      { name: "Whisper Choice Ultra", img: "Image/Clinic/Whitebandage1.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FWhitebandage1.jpg&name=whisper%20choice%20ultra&weight=6p&price=50" },
      { name: "Whisper Choice Regular", img: "Image/Clinic/Whisper Sanitary.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FWhisper%20Sanitary.png&name=Wishper%20Choice%20Regular&weight=7pc&price=30" },
      { name: "Stayfree Secure XL", img: "Image/Clinic/Strayfree1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FStrayfree1.webp&name=Stayfree%20secure%20XL&weight=6p&price=42" },
      
      { name: "Stayfree Cottony Regular", img: "Image/Clinic/Stayfree11.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FStayfree11.png&name=Stayfree%20Cottony%20Regular&weight=18pc&price=96" },
      { name: "Stayfree Secure XL", img: "Image/Clinic/StayfreeXL.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FStayfreeXL.webp&name=Stayfree%20secure%20XL&weight=18p&price=124" },
      { name: "Stayfree Secure Night XXL", img: "Image/Clinic/Stayfreenight.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FStayfreenight.webp&name=Stayfree%20Secure%20Night%20XXL&weight=18p&price=120" },
      { name: "Stayfree Secure DryMax XXL", img: "Image/Clinic/Stayfreedry.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FStayfreedry.png&name=Stayfree%20Secure%20DryMax%20XXL&weight=28p&price=350" },
     
     
      { name: "Junior Horlicks Nutrition Refil", img: "Image/Drinks/1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2F1.webp&name=Junior%20Horlicks%20Nutrition%20Refil&weight=1Kg&price=489" },
      { name: "Horlicks Chocolate Nutrition Drink", img: "Image/Drinks/choco.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2Fchoco.png&name=Horlicks%20Chocolate%20Nutrion%20Drink&weight=500g&price=249" },
      { name: "Horlicks Chocolate Refill", img: "Image/Drinks/chocorefil.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2Fchocorefil.avif&name=Horlicks%20Chocolate%20%20Refill&weight=1kg&price=460" },
      { name: "Junior Horlicks Nutrition Drink", img: "Image/Drinks/Junior.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2FJunior.png&name=JUnior%20Horlicks%20Nutrition%20Drink&weight=500g&price=299" },
      { name: "Horlicks Health & Nutrition Drink", img: "Image/Drinks/Hadult.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2FHadult.png&name=Horlicks%20Health%20%26%20Nutrition%20Drink&weight=500g&price=264" },
      { name: "Horlicks Nutrition Drink Refill", img: "Image/Drinks/refil.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2Frefil.png&name=Horlicks%20Nutrition%20Drink%20Refill&weight=500g&price=275" },
      { name: "Horlicks Nutrition Drink Refill", img: "Image/Drinks/refil.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2Frefil.png&name=Horlicks%20Nutrition%20Drink%20Refill&weight=750g&price=367" },
      { name: "Horlicks Nutrition Drink Refill", img: "Image/Drinks/refil.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2Frefil.png&name=Horlicks%20Nutrition%20Drink%20Refill&weight=750g&price=367" },
      { name: "BournVita Nutrition Drink Bottle", img: "https://m.media-amazon.com/images/I/51B9rJYpcSL.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2Frefil.png&name=Horlicks%20Nutrition%20Drink%20Refill&weight=500g&price=454" },
      { name: "BournVita Nutrition Drink Bottle", img: "https://m.media-amazon.com/images/I/51B9rJYpcSL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51B9rJYpcSL.jpg&name=BournVita%20Nutriion%20Drink%20Bottle&weight=500g&price=239" },
      { name: "BournVita Refill 500g", img: "Image/Drinks/Bournvitarefil.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2FBournvitarefil.png&name=BournVita%20Refill&weight=500g&price=330" },
      { name: "Womens Horlicks", img: "Image/Drinks/Womesh.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2FWomesh.png&name=Womens%20Horlics&weight=400g&price=390" },
      { name: "Complain Nutrition Drink", img: "Image/Drinks/Complan.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2FComplan.webp&name=Complain%20Nutrion%20Drink%20&weight=200g&price=135" },
      { name: "BournVita Refill", img: "Image/Drinks/Bournvitarefil.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2FBournvitarefil.png&name=BournVita%20Refill&weight=500g&price=230" },
      { name: "Cerelac Baby Cereal 12-42 month", img: "Image/Drinks/Cerelac.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2FCerelac.avif&name=Cerelac%20Baby%20Cereal%2012-42%20month&weight=300g&price=322" },
    //   { name: "Cerelac Baby Cereal 6-12 month", img: "Image/Drinks/Cerelac66.avif", url: "" },
      { name: "Cerelac Baby Cereal 6-12 month", img: "Image/Drinks/Cerelac666.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2FCerelac66.avif&name=Cerelac%20Baby%20Cereal%206-12%20month&weight=300g&price=245" },
      { name: "Cerelac Baby Cereal 6-12 month", img: "Image/Drinks/Cerelac612.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FDrinks%2FCerelac612.avif&name=Cerelac%20Baby%20Cereal%206-12%20month&weight=300g&price=250" },
      
      
      
      
      
      
      { name: "Mummypoko Pants Baby S", img: "Image/Clinic/Mummypoko.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FMummypoco.avif&name=Mummypoko%20Pants%20Baby%20S&weight=64p&price=599" },
      { name: "MamyPoko Pants M 7-12m", img: "Image/Clinic/Mamypoco52.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FMamypoco52.png&name=MamyPoko%20Pants%20M%207-12m&weight=52p&price=789" },
      { name: "MamyPoko Pants Baby S", img: "http://127.0.0.1:5500/Image/CLinic/MamyPoko99.webp", url: "https://www.dailyy.in/product-details.html?name=MamyPoko%20Pants%20Baby%20S&price=99&weight=11p&img=http%3A%2F%2F127.0.0.1%3A5500%2FImage%2FCLinic%2FMamyPoko99.webp" },
      { name: "Pampers New Born Baby", img: "Image/Clinic/P1.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FP1.avif&name=Pampers%20New%20Born%20Baby&weight=S%20869&price=924" },
      { name: "Pampers New Born Baby S", img: "Image/Clinic/P2.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FP2.jpg&name=Pampers%20New%20Born%20Baby%20S&weight=%2066p&price=899" },
      { name: "Pampers New Born Baby M", img: "Image/Clinic/P4.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FP4.png&name=Pampers%20New%20Born%20Baby%20M&weight=28&price=399" },
      { name: "Pampers New Born Baby M", img: "Image/Clinic/P5.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FP5.png&name=Pampers%20New%20Born%20Baby%20M&weight=2&price=24" },
      
      
      
      
      
      { name: "Orange Glucon D", img: "Image/Clinic/glucon.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fglucon.png&name=Orange%20Glucon%20D%20&weight=200g&price=80" },
      { name: "Regular Glucon D", img: "Image/Clinic/green450.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fgreen450.png&name=Regular%20Glucon%20D&weight=500g&price=118" },
      { name: "Regular Glucon D", img: "Image/Clinic/green1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fgreen1.webp&name=Regular%20Glucon%20D&weight=1kg&price=201" },
      { name: "Orange Glucon D", img: "Image/Clinic/G1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FG1.webp&name=Orange%20Glucon%20D&weight=1kg&price=349" },
      { name: "Nimbu Glucon D", img: "Image/Clinic/G2.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FG2.png&name=Nimbu%20Glucon%20D&weight=1Kg&price=334" },
      { name: "Mango Glucon D", img: "Image/Clinic/G3.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FG3.png&name=Mango%20Glucon%20D&weight=1kg&price=347" },
      { name: "Regular Glucose D", img: "Image/Clinic/G4.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FG4.jpg&name=Regular%20Glucose%20D&weight=500g&price=135" },
      { name: "Orange Glucon D", img: "Image/Clinic/G5.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FG5.jpeg&name=Orange%20Glucon%20D&weight=450g&price=163" },
      { name: "Regular Glucon D", img: "Image/Clinic/Glucosee.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FGlucosee.jpg&name=Regular%20Glucon%20D&weight=200g&price=80" },
      
      
      
      
      { name: "Sensodyne toothpaste", img: "Image/Clinic/seso.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fseso.jpeg&name=Sensodyne%20Toothpaste&weight=70g&price=80" },
      { name: "Sensodyne toothpaste", img: "Image/Clinic/sensodyne.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fsensodyne.webp&name=%20Sensodyne%20Toothpaste&weight=150g&price=135" },
      { name: "Colgate Herbal Toothpaste", img: "Image/Clinic/herbal.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fdany.jpeg&name=%20Patanjali%20DantKanti%20&weight=80g&price=60" },
      { name: "Patanjali DantKanti", img: "Image/Clinic/dany.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fkanti.avif&name=%20Patanjali%20Dantkanti&weight=100g&price=53" },
      { name: "Sensodyne Brush", img: "Image/Clinic/sesobrush.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fbrush.jpg&name=Sensodyne%20Brush%20&weight=1pc&price=60" },
      { name: "Sensodyne Brush 3pc", img: "Image/Clinic/brush.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fsesobrush.jpg&name=Sensodyne%20ToothBrush%20&weight=3pc&price=222" },
      { name: "Listerine Mouthwash", img: "Image/Clinic/mouthcleaner.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fmouthcleaner.webp&name=Listerine%20Mouthwash%20&weight=250ml&price=135" },
      { name: "Colgate MaxFresh Mouthwash", img: "Image/Clinic/Colag.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FColag.jpg&name=%20Colgate%20MaxFresh%20Mouthwash&weight=500ml&price=234" },
      { name: "Colgate MaxFresh Mouthwash", img: "Image/Clinic/mmm.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fmmm.jpg&name=%20Colgate%20MaxFresh%20Mouthwash&weight=500ml&price=234" },
      
      
      
      
      { name: "NIVEA Nourishing Body Milk 400ml", img: "Image/Clinic/Nivia.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FNivia.webp&name=NIVEA%20Nourishing%20Body%20Milk%20&weight=400ml&price=247" },
      { name: "Vaseline Deep Moisture Serum 400ml", img: "Image/Clinic/Vaseline.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FVaseline.webp&name=%20Vaseline%20Deep%20Moisture%20Serum&weight=400ml&price=280" },
      { name: "Joy Cocoa Rich Intense Nourishing 400ml", img: "Image/Clinic/joy.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fjoy.webp&name=Joy%20Cocoa%20Rich%20Intense%20Nourishing%20%20&weight=400ml&price=245" },
      { name: "Himalaya Herbals Cocoa Butter 400ml", img: "Image/Clinic/Hia.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FHia.webp&name=%20Himalaya%20Herbals%20Cocoa%20Butter&weight=400ml&price=260" },
      { name: "Himalaya Herbals Cocoa Butter 100ml", img: "Image/Clinic/cocobutter.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fcocobutter.webp&name=%20Himalaya%20Herbals%20Cocoa%20Butter&weight=100ml&price=75" },
      { name: "NIVEA Nourishing Body Milk 400ml", img: "Image/Clinic/Nivia.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FNivia.webp&name=NIVEA%20Nourishing%20Body%20Milk%20&weight=400ml&price=247" },
      { name: "Joy Moisture Shea Butter", img: "Image/Clinic/joyy.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fjoyy.jpg&name=Joy%20Moisture%20Shea%20Butter&weight=400ml&price=275" },
      { name: "Joy Honey & Almonds Body", img: "Image/Clinic/honey.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fhoney.webp&name=%20Joy%20Honey%20%26%20Almonds%20Body&weight=400ml&price=245" },
      { name: "Parachute Advansed Deep Nourish 400ml", img: "Image/Clinic/parachute.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fparachute.jpg&name=Parachute%20Advansed%20Deep%20Nourish%20&weight=400ml&price=231" },
      { name: "Vaseline Intensive Care Deep 45ml", img: "Image/Clinic/deep.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fdeep.webp&name=%20Vaseline%20Intensive%20Care%20Deep%20&weight=45ml&price=45" },
      { name: "Dove Body Love, Supple Bounce", img: "Image/Clinic/dove.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fdove.webp&name=Dove%20Body%20Love%2C%20Supple%20Bounce%20&weight=400ml&price=499" },
      
     
        { name: "Dettol Handwash Dispenser Bottle Pump 200ml", img: "Image/Clinic/Handwash1.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FHandwash1.png&name=Dettol%20Handwash%20Dispenser%20Bottle%20Pump%20200ml&weight=&price=76" },
        { name: "Dettol Skincare Liquid Handwash 200 ml", img: "Image/Clinic/Handwash2.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2FHandwash2.png&name=Dettol%20Skincare%20Liquid%20Handwash%20200%20ml&weight=&price=95" },
        { name: "Dettol Liquid Handwash refill 675ml", img: "Image/Clinic/refil1.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Frefil1.webp&name=Dettol%20Liquid%20Handwash%20refill%20675ml&weight=&price=92" },
        { name: "Dettol SKincare Handwash refill 175ml", img: "Image/Clinic/refil2.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Frefil2.avif&name=Dettol%20SKincare%20Handwash%20refill%20175ml&weight=&price=45" },
        { name: "Sensodyne Toothpaste", img: "Image/Clinic/seso.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fseso.jpeg&name=Sensodyne%20&weight=70g&price=80" },
        { name: "Sensodyne Toothpaste", img: "Image/Clinic/sensodyne.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fsensodyne.webp&name=%20Sensodyne%20&weight=150g&price=135" },
        { name: "Colgate Herbal Toothpaste", img: "Image/Clinic/herbal.webp", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fherbal.webp&name=Colgate%20Herbal%20Toothpaste%20&weight=200g&price=260" },
        { name: "Patanjali DantKanti", img: "Image/Clinic/dany.jpeg", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fdany.jpeg&name=%20Patanjali%20DantKanti%20&weight=80g&price=60" },
        { name: "Patanjali Dantkanti", img: "Image/Clinic/kanti.avif", url: "https://www.dailyy.in/product-details.html?img=Image%2FClinic%2Fkanti.avif&name=%20Patanjali%20Dantkanti&weight=100g&price=53" },
 
        { name: "Bajaj Almond Hair oil 500ml", img: "https://m.media-amazon.com/images/I/51EhF-+Ju5L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51EhF-%2BJu5L._SL1500_.jpg&name=%20Bajaj%20Almond%20Hair%20oil&weight=500ml&price=315" },
        { name: "Parachute Coconut Oil 200ml", img: "https://m.media-amazon.com/images/I/61dUCXFgN3L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61dUCXFgN3L._SL1500_.jpg&name=%20Parachute%20Coconut%20Oil&weight=200ml&price=97" },
        { name: "Dabur Amla Hair Oil 180ml", img: "https://m.media-amazon.com/images/I/61GC9DwsN2L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61GC9DwsN2L._SL1500_.jpg&name=%20%20Dabur%20Amla%20Hair%20Oil%20&weight=180ml&price=90" },
        { name: "Parachute Coconut Oil 500ml", img: "https://m.media-amazon.com/images/I/61dUCXFgN3L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61dUCXFgN3L._SL1500_.jpg&name=%20Parachute%20Coconut%20Oil&weight=500ml&price=265" },
        { name: "Parachute Coconut Oil 190ml", img: "https://m.media-amazon.com/images/I/61dUCXFgN3L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61dUCXFgN3L._SL1500_.jpg&name=%20Parachute%20Coconut%20Oil&weight=190ml&price=109" },
        { name: "Jasmine Coconut Hair Oil 500ml", img: "https://m.media-amazon.com/images/I/61tp6+HeNvL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61tp6%2BHeNvL._SL1500_.jpg&name=%20%20Jasmine%20Coconut%20Hair%20Oil%20&weight=500ml&price=149" },
        { name: "Bajaj Almond Hair oil 475ml", img: "https://m.media-amazon.com/images/I/51EhF-+Ju5L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51EhF-%2BJu5L._SL1500_.jpg&name=%20Bajaj%20Almond%20Hair%20oil&weight=475ml&price=267" },
        
        
        { name: "Jasmine Coconut Hair Oil 500ml", img: "https://m.media-amazon.com/images/I/61tp6+HeNvL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51EhF-%2BJu5L._SL1500_.jpg&name=%20Bajaj%20Almond%20Hair%20oil&weight=475ml&price=267" },
        { name: "Dabur Sarson Amla Oil 80ml", img: "https://m.media-amazon.com/images/I/51qFEmL4MaL._SL1000_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51qFEmL4MaL._SL1000_.jpg&name=Dabur%20Sarson%20Amla%20Oil%2C&weight=80ml&price=20" },
        { name: "Parachute Coconut Oil 600ml", img: "https://m.media-amazon.com/images/I/61dUCXFgN3L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61dUCXFgN3L._SL1500_.jpg&name=%20Parachute%20Coconut%20Oil&weight=600ml&price=204" },
        { name: "Jasmine Coconut Hair Oil 300ml", img: "https://m.media-amazon.com/images/I/61tp6+HeNvL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61tp6%2BHeNvL._SL1500_.jpg&name=%20%20Jasmine%20Coconut%20Hair%20Oil%20&weight=300ml&price=135" },
        { name: "Jasmine Coconut Hair Oil 90ml", img: "https://m.media-amazon.com/images/I/61tp6+HeNvL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61tp6%2BHeNvL._SL1500_.jpg&name=%20%20Jasmine%20Coconut%20Hair%20Oil%20&weight=45ml&price=20" },
        { name: "Dabur Amla Hair Oil 90ml", img: "https://m.media-amazon.com/images/I/61GC9DwsN2L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61GC9DwsN2L._SL1500_.jpg&name=%20%20Dabur%20Amla%20Hair%20Oil%20&weight=90ml&price=28" },
        { name: "Dabur Amla Hair Oil 500ml", img: "https://m.media-amazon.com/images/I/61GC9DwsN2L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61GC9DwsN2L._SL1500_.jpg&name=%20%20Dabur%20Amla%20Hair%20Oil%20&weight=500ml&price=141" },
        { name: "Dabur Amla Hair Oil 40ml", img: "https://m.media-amazon.com/images/I/61GC9DwsN2L._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61GC9DwsN2L._SL1500_.jpg&name=%20%20Dabur%20Amla%20Hair%20Oil%20&weight=40ml&price=10" },
        { name: "Dabur Sarson Amla Oil", img: "https://m.media-amazon.com/images/I/51qFEmL4MaL._SL1000_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51qFEmL4MaL._SL1000_.jpg&name=Dabur%20Sarson%20Amla%20Oil%2C&weight=350ml&price=130" },
        { name: "Parachute Jar Coconut Oil 175ml", img: "https://m.media-amazon.com/images/I/8152sQ6PvFL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F8152sQ6PvFL._SL1500_.jpg&name=Parachute%20Jar%20Coconut%20Oil&weight=175ml&price=85" },
        { name: "Dabur Sarson Amla Oil 175", img: "https://m.media-amazon.com/images/I/51qFEmL4MaL._SL1000_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51qFEmL4MaL._SL1000_.jpg&name=Dabur%20Sarson%20Amla%20Oil%2C&weight=175ml&price=43" },
        { name: "Dabur Sarson Amla Oil 350ml", img: "https://m.media-amazon.com/images/I/51qFEmL4MaL._SL1000_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51qFEmL4MaL._SL1000_.jpg&name=Dabur%20Sarson%20Amla%20Oil%2C&weight=350ml&price=130" },
        { name: "Parachute Jar Coconut Oil 600ml", img: "https://m.media-amazon.com/images/I/610znuVyFXL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F610znuVyFXL._SL1500_.jpg&name=%20Parachute%20Jar%20Coconut%20Oil%20&weight=600ml&price=243" },
        { name: "Bajaj Almond Hair oil 95ml", img: "https://m.media-amazon.com/images/I/61sba4IXe2S._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61sba4IXe2S._SL1500_.jpg&name=%20Bajaj%20Almond%20Hair%20oil&weight=95ml&price=70" },
        
        
        
        
        
        { name: "Himalaya Purifying Neem 100ml", img: "https://m.media-amazon.com/images/I/51lG-irBxDL._SL1100_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51lG-irBxDL._SL1100_.jpg&name=Himalaya%20Purifying%20Neem%20&weight=100ml&price=149" },
        { name: "Himalaya Purifying Neem 200ml", img: "https://m.media-amazon.com/images/I/51lG-irBxDL._SL1100_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51lG-irBxDL._SL1100_.jpg&name=Himalaya%20Purifying%20Neem%20&weight=200ml&price=299" },
        { name: "Himalaya Purifying Neem 400ml", img: "https://m.media-amazon.com/images/I/51lG-irBxDL._SL1100_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51lG-irBxDL._SL1100_.jpg&name=Himalaya%20Purifying%20Neem%20&weight=400ml&price=425" },
        { name: "Himalaya Purifying Neem 300ml", img: "https://m.media-amazon.com/images/I/51lG-irBxDL._SL1100_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51lG-irBxDL._SL1100_.jpg&name=Himalaya%20Purifying%20Neem%20&weight=300ml&price=345" },
        { name: "Himalya Moisturizg Aloe Vera 100ml ", img: "https://m.media-amazon.com/images/I/51PTGh6pCpL._SL1000_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51PTGh6pCpL._SL1000_.jpg&name=Himalya%20Moisturizg%20Aloe%20Vera%20&weight=100ml&price=140" },
        { name: "Himalya Moisturizg Aloe Vera 200ml", img: "https://m.media-amazon.com/images/I/51PTGh6pCpL._SL1000_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51PTGh6pCpL._SL1000_.jpg&name=Himalya%20Moisturizg%20Aloe%20Vera%20&weight=200ml&price=235" },
        { name: "POND'S Bright Beauty Spotless Glow 123g", img: "https://m.media-amazon.com/images/I/412lJR+KDvL._SL1000_.jpg", url: "https://www.dailyy.in/product-details.html?name=POND%27S%20Bright%20Beauty%20Spotless%20Glow%20123g&price=180&weight=&img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F412lJR%2BKDvL._SL1000_.jpg" },
        { name: "POND'S Bright Miracle Detox 100g", img: "https://m.media-amazon.com/images/I/51BRgY8YPYL._SL1000_.jpg", url: "https://www.dailyy.in/product-details.html?name=POND%27S%20Bright%20Miracle%20Detox%20100g%20&price=195&weight=&img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51BRgY8YPYL._SL1000_.jpg" },
        { name: "Clean & Clear Face Wash 150ml ", img: "https://m.media-amazon.com/images/I/51+8qn67b0L._SL1080_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51%2B8qn67b0L._SL1080_.jpg&name=Clean%20%26%20Clear%20%20Face%20Wash&weight=150ml&price=189" },
        { name: "Clean & Clear Big Pack 240ml", img: "https://m.media-amazon.com/images/I/51JjTXvhsbL._SL1080_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51JjTXvhsbL._SL1080_.jpg&name=Clean%20%26%20Clear%20Big%20Pack&weight=240ml&price=335" },
        { name: "Clean & Clear Face Wash 100ml", img: "https://m.media-amazon.com/images/I/5114aTul5kL._SL1080_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F5114aTul5kL._SL1080_.jpg&name=Clean%20%26%20Clear%20%20Face%20Wash&weight=100ml&price=170" },
    
        
        { name: "Clean & Clear Energy Lemon 100ml", img: "https://m.media-amazon.com/images/I/81NLsC0m1VL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81NLsC0m1VL._SL1500_.jpg&name=Clean%20%26%20Clear%20%20Energy%20Lemon%20&weight=100ml&price=145" },
        { name: "Garnier Skin Naturals Facewash 100ml", img: "https://m.media-amazon.com/images/I/51Ubf0+-wYS._SL1000_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51Ubf0%2B-wYS._SL1000_.jpg&name=Garnier%20Skin%20Naturals%20Facewash%20100ml%20&weight=&price=155" },
        { name: "Garnier Men Acno Fight Anti Pimple", img: "https://m.media-amazon.com/images/I/51bDRF35L9L._SL1073_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51bDRF35L9L._SL1073_.jpg&name=Garnier%20Men%20Acno%20Fight%20Anti%20Pimple%20&weight=100ml&price=200" },
        { name: "Garnier Men Oil Clear Deep Cleansing 50g", img: "https://m.media-amazon.com/images/I/519hejFGftL._SL1073_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F519hejFGftL._SL1073_.jpg&name=Garnier%20Men%20Oil%20Clear%20Deep%20Cleansing%2050g&weight=&price=109" },
       
       
       
       
        { name: "Pears Soft & Fresh Soap", img: "https://m.media-amazon.com/images/I/41Cc3EVGJRL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41Cc3EVGJRL.jpg&name=Pears%20Soft%20%26%20Fresh%20Soap&weight=100g&price=62" },
        { name: "Pears Oil Clear & Glow Soap Bar", img: "https://m.media-amazon.com/images/I/61Gr1et7PCL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61Gr1et7PCL.jpg&name=Pears%20Oil%20Clear%20%26%20Glow%20Soap%20Bar&weight=75g&price=63" },
        { name: "Pears Pure and Gentle Soap", img: "https://www.jiomart.com/images/product/original/490002516/pears-pure-gentle-soap-with-natural-oils-100-g-product-images-o490002516-p490002516-1-202306071122.jpg?im=Resize=(420,420)", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.jiomart.com%2Fimages%2Fproduct%2Foriginal%2F490002516%2Fpears-pure-gentle-soap-with-natural-oils-100-g-product-images-o490002516-p490002516-1-202306071122.jpg%3Fim%3DResize%3D(420%2C420)&name=Pears%20Pure%20and%20Gentle%20Soap%20&weight=100g&price=46" },
        { name: "Margo Original Neem Soap", img: "https://m.media-amazon.com/images/I/81v2PowpjiL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81v2PowpjiL._SL1500_.jpg&name=Margo%20Original%20Neem%20Soap&weight=100g&price=32" },
        { name: "Santoor Total Skin Soap", img: "https://images.apollo247.in/pub/media/catalog/product/S/A/SAN0013_1-AUG23_1.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fimages.apollo247.in%2Fpub%2Fmedia%2Fcatalog%2Fproduct%2FS%2FA%2FSAN0013_1-AUG23_1.jpg&name=Santoor%20Total%20Skin%20Soap&weight=100g&price=36" },
        { name: "Dove Cream Beauty Soap Bar", img: "https://www.jiomart.com/images/product/original/490002440/dove-cream-beauty-bathing-bar-100-g-product-images-o490002440-p490002440-1-202208121832.jpg?im=Resize=(420,420)", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.jiomart.com%2Fimages%2Fproduct%2Foriginal%2F490002440%2Fdove-cream-beauty-bathing-bar-100-g-product-images-o490002440-p490002440-1-202208121832.jpg%3Fim%3DResize%3D(420%2C420)&name=Dove%20Cream%20Beauty%20Soap%20Bar&weight=100g&price=65" },
        { name: "Cinthol Lime Bath Soap", img: "https://m.media-amazon.com/images/I/51FDCPRU6mL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51FDCPRU6mL.jpg&name=Cinthol%20Lime%20Bath%20Soap&weight=40g&price=10" },
        { name: "Cinthol Cool Bath Soap", img: "https://5.imimg.com/data5/HL/RO/MY-37165569/cinthol-cool-soap-100-gm-250x250.png", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FHL%2FRO%2FMY-37165569%2Fcinthol-cool-soap-100-gm-250x250.png&name=Cinthol%20Cool%20Bath%20Soap%20&weight=40g&price=10" },
        { name: "Lifebuoy Cool Fresh Soap Bar", img: "https://cdn1.npcdn.net/image/1664420268c033b70701d5f3077bdde0481fd22f01.png?md5id=947f1a3a5122ba00b91e95a516295359&new_width=1000&new_height=1000&w=1679452861", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fcdn1.npcdn.net%2Fimage%2F1664420268c033b70701d5f3077bdde0481fd22f01.png%3Fmd5id%3D947f1a3a5122ba00b91e95a516295359%26new_width%3D1000%26new_height%3D1000%26w%3D1679452861&name=Lifebuoy%20Cool%20Fresh%20Soap%20Bar&weight=40g&price=10" },
        { name: "Lifebuoy Cool total 10 soap", img: "https://m.media-amazon.com/images/I/61VxLtMtcQL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61VxLtMtcQL.jpg&name=Lifebuoy%20Cool%20total%2010%20soap&weight=75g&price=17" },
        { name: "Lifebuoy Neem Aloe Vera", img: "https://assets.unileversolutions.com/v1/111277840.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fassets.unileversolutions.com%2Fv1%2F111277840.jpg&name=Lifebuoy%20Neem%20Aloe%20Vera&weight=40g&price=10" },
        { name: "Dettol Intense Cool Bar", img: "https://m.media-amazon.com/images/I/61fve+QAPhL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fassets.unileversolutions.com%2Fv1%2F111277840.jpg&name=Lifebuoy%20Neem%20Aloe%20Vera&weight=100g&price=38" },
        { name: "Dettol Skincare Moisturizing", img: "https://jebnalak.com/cdn/shop/products/6001106298487_800x.jpg?v=1672318116", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61fve%2BQAPhL.jpg&name=Dettol%20Intense%20Cool%20Bar&weight=125gX6&price=340" },
       
       
       
        { name: "Clinic Plus Shampoo", img: "https://m.media-amazon.com/images/I/71vilEGIW+L.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71vilEGIW%2BL.jpg&name=Clinic%20Plus%20%20Shampoo&weight=175ml&price=80" },
        { name: "Head & Shoulders Lemon fresh", img: "https://m.media-amazon.com/images/I/71gLRd2A4cL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71gLRd2A4cL.jpg&name=Head%20%26%20Shoulders%20%20Lemon%20fresh&weight=180ml&price=194" },
        { name: "Himalaya Gentle Daily Care", img: "https://himalayawellness.in/cdn/shop/files/1_516a2976-89a8-47b5-85ae-7d42b2c13f90.jpg?v=1686906304", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fhimalayawellness.in%2Fcdn%2Fshop%2Ffiles%2F1_516a2976-89a8-47b5-85ae-7d42b2c13f90.jpg%3Fv%3D1686906304&name=Himalaya%20Gentle%20Daily%20Care%20&weight=340ml&price=195" },
        { name: "Dove Hair Fall Rescue Shampoo", img: "https://m.media-amazon.com/images/I/41nqkG-bxLL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41nqkG-bxLL.jpg&name=Dove%20Hair%20Fall%20Rescue%20Shampoo%20&weight=180ml&price=180" },
        { name: "TRESemme Keratin Smooth", img: "https://5.imimg.com/data5/SELLER/PDFImage/2023/8/333777718/GK/QZ/IT/180072325/tresemme-shampoo-500x500.png", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FPDFImage%2F2023%2F8%2F333777718%2FGK%2FQZ%2FIT%2F180072325%2Ftresemme-shampoo-500x500.png&name=TRESemme%20Keratin%20Smooth%20&weight=185ml&price=180" },
        { name: "Head & Shoulders Cool shampoo", img: "https://m.media-amazon.com/images/I/71KtIK+194L.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71KtIK%2B194L.jpg&name=Head%20%26%20Shoulders%20Cool%20shampoo&weight=180ml&price=194" },
        { name: "Sunsilk Stunning Black Shine Shampoo", img: "https://m.media-amazon.com/images/I/510E7iE-AiS.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F510E7iE-AiS.jpg&name=Sunsilk%20Stunning%20Black%20Shine%20Shampoo&weight=180ml&price=140" },
        { name: "Pantene Advanced Haircare Solution", img: "https://m.media-amazon.com/images/I/51Q33t+HFJL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51Q33t%2BHFJL.jpg&name=Pantene%20Advanced%20Haircare%20Solution&weight=200ml&price=179" },
        { name: "TRESemme Smooth & Shine Shampoo", img: "https://www.tresemme.in/cdn/shop/files/11622_S2-8909106001329.jpg?v=1721900055&width=1445", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.tresemme.in%2Fcdn%2Fshop%2Ffiles%2F11622_S2-8909106001329.jpg%3Fv%3D1721900055%26width%3D1445&name=TRESemme%20Smooth%20%26%20Shine%20Shampoo&weight=185ml&price=190" },
        { name: "Sunsilk Lusciously Thick & Long", img: "https://m.media-amazon.com/images/I/51KqKGpTLiL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51KqKGpTLiL.jpg&name=Sunsilk%20Lusciously%20Thick%20%26%20Long&weight=360ml&price=300" },
        { name: "Dove Intense Repair Shampoo", img: "https://m.media-amazon.com/images/I/41G2IZXVrcL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41G2IZXVrcL.jpg&name=Dove%20Intense%20Repair%20Shampoo&weight=180ml&price=175" },
      
      
      
        { name: "Park Avenue Original Spray", img: "https://m.media-amazon.com/images/I/61tHSbuiNyL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61tHSbuiNyL.jpg&name=Park%20Avenue%20Original%20&weight=150ml&price=101" },
        { name: "Park Avenue Signature Voyage Spray", img: "https://m.media-amazon.com/images/I/61y2ymmYu9L.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61y2ymmYu9L.jpg&name=Park%20Avenue%20Signature%20Voyage&weight=150ml&price=200" },
        { name: "NIVEA MEN Fresh Active Original", img: "https://S/aplus-media/vc/b14dce7f-ec86-4b93-900c-2aa2cf5f8634._CR4,0,300,300_PT0_SX300__.png", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Faplus-media%2Fvc%2Fb14dce7f-ec86-4b93-900c-2aa2cf5f8634._CR4%2C0%2C300%2C300_PT0_SX300__.png&name=NIVEA%20MEN%20Fresh%20Active%20Origina&weight=150ml&price=162" },
        { name: "Fogg Deodorant women", img: "https://m.media-amazon.com/images/I/51f1RWy13WL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51f1RWy13WL.jpg&name=Fogg%20Deodorant%20women&weight=150ml&price=150" },
        { name: "FOGG Royal No Gas Deodorant For Men", img: "https://m.media-amazon.com/images/I/61AhDcMgHFL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61AhDcMgHFL.jpg&name=FOGG%20Royal%20No%20Gas%20Deodorant%20For%20Men&weight=150ml&price=192" },
        { name: "Axe Signature Mysterious No Gas Deodorant", img: "https://m.media-amazon.com/images/I/51Qj5zRMuDL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51Qj5zRMuDL.jpg&name=Axe%20Signature%20Mysterious%20No%20Gas%20Deodorant&weight=154ml&price=155" },
    
    
        { name: "Besan Ladoo Pure Ghee", img: "https://m.media-amazon.com/images/I/31c2lisTCqL.jpg", weight: "500g", price: "₹149", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31c2lisTCqL.jpg&name=Besan%20Ladoo%20Pure%20Ghee&weight=500g&price=149" },
        { name: "Motichur Ladoo Pure Ghee", img: "https://www.jhamasweets.com/cdn/shop/products/9o1a9857.jpg?v=1674301350", weight: "500g", price: "₹180", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.jhamasweets.com%2Fcdn%2Fshop%2Fproducts%2F9o1a9857.jpg%3Fv%3D1674301350&name=Motichur%20Ladoo%20Pure%20Ghee&weight=500g&price=180" },
        { name: "Kaju Katli Pure Ghee", img: "https://www.cakedeliverypathankot.com/wp-content/uploads/2022/10/Kaju-Katli-1kg-Desi-Ghee.jpg", weight: "200g", price: "₹150", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.cakedeliverypathankot.com%2Fwp-content%2Fuploads%2F2022%2F10%2FKaju-Katli-1kg-Desi-Ghee.jpg&name=Kaju%20Katli%20Pure%20Ghee&weight=200g&price=150" },
        { name: "Peda Pure Ghee", img: "https://www.jiomart.com/images/product/original/rvauzwuyew/sartaj-a2-desi-ghee-roasted-peda-500g-product-images-orvauzwuyew-p605136754-0-202309291634.jpg?im=Resize=(420,420)", weight: "250g", price: "₹150", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.jiomart.com%2Fimages%2Fproduct%2Foriginal%2Frvauzwuyew%2Fsartaj-a2-desi-ghee-roasted-peda-500g-product-images-orvauzwuyew-p605136754-0-202309291634.jpg%3Fim%3DResize%3D(420%2C420)&name=Peda%20Pure%20Ghee&weight=250g&price=150" },
        { name: "Kalakand Pure Ghee", img: "https://www.madhursugar.com/uploads/recipes_images/thumb_img/thumb_1614021921.png", weight: "500g", price: "₹300", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.madhursugar.com%2Fuploads%2Frecipes_images%2Fthumb_img%2Fthumb_1614021921.png&name=Kalakand%20Pure%20Ghee&weight=500g&price=300" },
        { name: "Lai Pure Ghee", img: "https://mirchi.com/os/cdn/content/images/khowa%20lai%20new%20shree%20ram%20tilkut%20bhandar_medium_0693877.webp", weight: "200g", price: "₹150", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fmirchi.com%2Fos%2Fcdn%2Fcontent%2Fimages%2Fkhowa%2520lai%2520new%2520shree%2520ram%2520tilkut%2520bhandar_medium_0693877.webp&name=Lai%20Pure%20Ghee&weight=200g&price=150" },
        { name: "Agra Sweets BanjaraPure Ghee", img: "https://b.zmtcdn.com/data/dish_photos/711/1866761a515bdedf1fee3eceb85b1711.png", weight: "200g", price: "₹150", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fb.zmtcdn.com%2Fdata%2Fdish_photos%2F711%2F1866761a515bdedf1fee3eceb85b1711.png&name=Agra%20Sweets%20BanjaraPure%20Ghee&weight=200g&price=150" },
        { name: "Gulab Jamun Pure Ghee 15/pc", img: "https://www.jiomart.com/images/product/original/rvuopjsnfg/ghasitaram-s-traditional-gulab-jamun-fried-in-pure-ghee-tin-gift-for-every-traditional-indian-festival-best-indian-sweets-500g-product-images-orvuopjsnfg-p594374493-1-202210101032.jpg?im=Resize=(420,420)", weight: "₹15/pc", price: "₹15", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.jiomart.com%2Fimages%2Fproduct%2Foriginal%2Frvuopjsnfg%2Fghasitaram-s-traditional-gulab-jamun-fried-in-pure-ghee-tin-gift-for-every-traditional-indian-festival-best-indian-sweets-500g-product-images-orvuopjsnfg-p594374493-1-202210101032.jpg%3Fim%3DResize%3D(420%2C420)&name=Gulab%20Jamun%20Pure%20Ghee%2015%2Fpc&weight=15%2Fpc&price=15" },
        { name: "Sweet Rasgulla 15/pc", img: "https://www.ramasrey.com/wp-content/uploads/2018/08/Rasgulla.jpg", weight: "₹15/pc", price: "₹15", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.ramasrey.com%2Fwp-content%2Fuploads%2F2018%2F08%2FRasgulla.jpg&name=Sweet%20Rasgulla%2015%2Fpc&weight=15%2Fpc&price=15" },
    
    
        { name: "Expresso Hot Coffee", img: "https://png.pngtree.com/png-clipart/20231018/original/pngtree-espresso-coffee-cup-isolated-png-image_13342543.png", weight: "Be Happy Cafe", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20231018%2Foriginal%2Fpngtree-espresso-coffee-cup-isolated-png-image_13342543.png&name=%20Expresso%20Hot%20Coffee%20&weight=Be%20Happy%20Cafe&price=99" },
        { name: "Caffe Americano Hot coffee", img: "https://www.sfu.ca/siat/student_projects/iat339_2022/eyon/Espresso/img/americano-396.png", weight: "Be Happy Cafe", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.sfu.ca%2Fsiat%2Fstudent_projects%2Fiat339_2022%2Feyon%2FEspresso%2Fimg%2Famericano-396.png&name=Caffe%20Americano%20Hot%20coffee&weight=Be%20Happy%20Cafe&price=99" },
        { name: "Cappuccino Hot coffee", img: "https://png.pngtree.com/png-vector/20240219/ourmid/pngtree-cup-of-hot-cappuccino-coffee-on-white-background-png-image_11752259.png", weight: "Be Happy Cafe", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20240219%2Fourmid%2Fpngtree-cup-of-hot-cappuccino-coffee-on-white-background-png-image_11752259.png&name=cappuccino%20Hot%20coffee&weight=Be%20Happy%20Cafe&price=99" },
        { name: "Cafe Latte coffee", img: "https://static.vecteezy.com/system/resources/previews/023/742/396/non_2x/latte-coffee-isolated-illustration-ai-generative-free-png.png", weight: "Be Happy Cafe", price: "₹₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F023%2F742%2F396%2Fnon_2x%2Flatte-coffee-isolated-illustration-ai-generative-free-png.png&name=Cafe%20Latte%20coffee%20%20&weight=Be%20Happy%20Cafe&price=%E2%82%B999" },
        { name: "Caramel Latte", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrEF_lNNmDvDQS_zllJTLWqTRskZwtn5ApOg&s", weight: "Be Happy Cafe", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTrEF_lNNmDvDQS_zllJTLWqTRskZwtn5ApOg%26s&name=Caramel%20Latte&weight=Be%20Happy%20Cafe&price=99" },
        { name: "Caffe Mocha", img: "https://png.pngtree.com/png-clipart/20231016/original/pngtree-cafe-mocha-coffee-ingredient-png-image_13324345.png", weight: "Be Happy Cafe", price: "₹₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20231016%2Foriginal%2Fpngtree-cafe-mocha-coffee-ingredient-png-image_13324345.png&name=Caffe%20Mocha&weight=Be%20Happy%20Cafe&price=%E2%82%B999" },
        { name: "Hot chocolate coffee", img: "https://www.foodness.it/wp-content/uploads/2018/09/Cioccolata-classica-IN-EVIDENZA.png", weight: "Be Happy Cafe", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.foodness.it%2Fwp-content%2Fuploads%2F2018%2F09%2FCioccolata-classica-IN-EVIDENZA.png&name=%20%20Hot%20chocolate%20coffee&weight=Be%20Happy%20Cafe&price=99" },
        { name: "Iced Latte", img: "https://blenz.com/wp-content/uploads/2023/06/blenz-iced-cafe-latte.png", weight: "Be Happy Cafe", price: "₹₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fblenz.com%2Fwp-content%2Fuploads%2F2023%2F06%2Fblenz-iced-cafe-latte.png&name=Iced%20Latte&weight=Be%20Happy%20Cafe&price=%E2%82%B999" },
        { name: "Iced Caramel Latte", img: "https://static.vecteezy.com/system/resources/previews/027/145/679/non_2x/iced-caramel-latte-topped-with-whipped-cream-and-caramel-sauce-perfect-for-drink-catalog-ai-generated-png.png", weight: "Be Happy Cafe", price: "₹₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F027%2F145%2F679%2Fnon_2x%2Ficed-caramel-latte-topped-with-whipped-cream-and-caramel-sauce-perfect-for-drink-catalog-ai-generated-png.png&name=%20Iced%20Caramel%20Latte%20&weight=Be%20Happy%20Cafe&price=%E2%82%B999" },
        { name: "Iced Americano", img: "https://cdn.greensoft.mn/uploads/site/1200/product/new_2d5743de68e07b82ab4bcd322b93e625dd4a624e.png", weight: "Be Happy Cafe", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fcdn.greensoft.mn%2Fuploads%2Fsite%2F1200%2Fproduct%2Fnew_2d5743de68e07b82ab4bcd322b93e625dd4a624e.png&name=%20Iced%20Americano%20&weight=Be%20Happy%20Cafe&price=99" },
    
        { name: "Fresh Margherita Pizza", img: "https://media.istockphoto.com/id/1168754685/photo/pizza-margarita-with-cheese-top-view-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=psLRwd-hX9R-S_iYU-sihB4Jx2aUlUr26fkVrxGDfNg=", weight: "Be Happy Cafe", price: "₹199", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1168754685%2Fphoto%2Fpizza-margarita-with-cheese-top-view-isolated-on-white-background.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DpsLRwd-hX9R-S_iYU-sihB4Jx2aUlUr26fkVrxGDfNg%3D&name=Fresh%20Margherita%20Pizza&weight=Be%20Happy%20Cafe&price=199" },
        { name: "Veggie Pizza", img: "https://www.mexicangoldenchicken.com/wp-content/uploads/2023/11/mushroom-pizza-1.webp", weight: "Be Happy Cafe", price: "₹199", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.mexicangoldenchicken.com%2Fwp-content%2Fuploads%2F2023%2F11%2Fmushroom-pizza-1.webp&name=%20Veggie%20Pizza%20&weight=Be%20Happy%20Cafe&price=199" },
        { name: "Veg Paneer Fresh Pizza", img: "https://chefchoice.com.np/wp-content/uploads/2020/07/Paneer_Makhni.jpg", weight: "Be Happy Cafe", price: "₹199", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fchefchoice.com.np%2Fwp-content%2Fuploads%2F2020%2F07%2FPaneer_Makhni.jpg&name=%20Veg%20Paneer%20Fresh%20Pizza%20&weight=Be%20Happy%20Cafe&price=199" },
        { name: "Fresh Cheese Burst Pizza", img: "https://www.sgarmenianchurch.org/wp-content/uploads/2020/05/pizza-cheese.png", weight: "Be Happy Cafe", price: "₹199", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.sgarmenianchurch.org%2Fwp-content%2Fuploads%2F2020%2F05%2Fpizza-cheese.png&name=%20Fresh%20Cheese%20Burst%20Pizza%20&weight=Be%20Happy%20Cafe&price=199" },
        { name: "Pepperoni Pizza", img: "https://img.freepik.com/fotos-premium/pizza-pepperoni-aceitunas-aceitunas-negras-plato_721662-1366.jpg?w=360", weight: "Be Happy Cafe", price: "₹199", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Fpizza-pepperoni-aceitunas-aceitunas-negras-plato_721662-1366.jpg%3Fw%3D360&name=%20Pepperoni%20Pizza%20&weight=Be%20Happy%20Cafe&price=199" },
        { name: "Bomber Spicy Pizza", img: "https://www.dominos.co.in/store-location/img/nonveg.jpg", weight: "Be Happy Cafe", price: "₹199", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.dominos.co.in%2Fstore-location%2Fimg%2Fnonveg.jpg&name=Bomber%20Spicy%20Pizza%20&weight=Be%20Happy%20Cafe&price=199" },
        { name: "Chicken Non Veg Pizza", img: "https://cakentake.in/wp-content/uploads/2024/03/BBQ-Chicken-Pizza-1.png", weight: "Be Happy Cafe", price: "₹199", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fcakentake.in%2Fwp-content%2Fuploads%2F2024%2F03%2FBBQ-Chicken-Pizza-1.png&name=Chicken%20Non%20Veg%20Pizza&weight=Be%20Happy%20Cafe&price=199" },
       
       
       
       
        { name: "Fresh Lemon Cake", img: "https://i5.walmartimages.ca/images/Enlarge/069/793/6000202069793.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", weight: "Be Happy Cafe", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fi5.walmartimages.ca%2Fimages%2FEnlarge%2F069%2F793%2F6000202069793.jpg%3FodnHeight%3D612%26odnWidth%3D612%26odnBg%3DFFFFFF&name=%20Fresh%20Lemon%20Cake%20&weight=Be%20Happy%20Cafe&price=79" },
        { name: "Chocolate Cake", img: "https://img.freepik.com/premium-photo/there-is-piece-chocolate-cake-plate-with-fork-generative-ai_927978-15347.jpg", weight: "Be Happy Cafe", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fthere-is-piece-chocolate-cake-plate-with-fork-generative-ai_927978-15347.jpg&name=%20Chocolate%20Cake%20%20&weight=Be%20Happy%20Cafe&price=79" },
        { name: "Peanut Fresh Cake", img: "https://sweetsfromtheearth.com/wp-content/uploads/2019/03/GF-Peanut-Butter-Brownie-Bulk2.jpeg", weight: "Be Happy Cafe", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fsweetsfromtheearth.com%2Fwp-content%2Fuploads%2F2019%2F03%2FGF-Peanut-Butter-Brownie-Bulk2.jpeg&name=%20Peanut%20Fresh%20Cake%20&weight=Be%20Happy%20Cafe&price=79" },
        { name: "Fresh Carrot Cake", img: "https://novellaskitchen.com/wp-content/uploads/2021/04/carrot-cake-9-inch-1.jpg", weight: "Be Happy Cafe", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fnovellaskitchen.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fcarrot-cake-9-inch-1.jpg&name=%20Fresh%20Carrot%20Cake%20&weight=Be%20Happy%20Cafe&price=79" },
        { name: "Moist Creamy Cake", img: "https://png.pngtree.com/png-vector/20231104/ourmid/pngtree-frosting-fantasy-a-moist-vanilla-cake-slice-delight-png-image_10474158.png", weight: "Be Happy Cafe", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20231104%2Fourmid%2Fpngtree-frosting-fantasy-a-moist-vanilla-cake-slice-delight-png-image_10474158.png&name=%20Moist%20Creamy%20Cake%20&weight=Be%20Happy%20Cafe&price=79" },
        { name: "Hot Dark Chocolate", img: "https://www.sweetestmenu.com/wp-content/uploads/2017/11/dairyfreechocolatecake7.jpg", weight: "Be Happy Cafe", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.sweetestmenu.com%2Fwp-content%2Fuploads%2F2017%2F11%2Fdairyfreechocolatecake7.jpg&name=%20Hot%20Dark%20Chocolate%20&weight=Be%20Happy%20Cafe&price=79" },
        { name: "Fresh Pine Apple Cake", img: "https://sodiedocesusa.com/metrowest/wp-content/uploads/sites/2/2022/08/20412_fotos_58-maracuja_bolo_fatia_540x400px58-300x300.png", weight: "Be Happy Cafe", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fsodiedocesusa.com%2Fmetrowest%2Fwp-content%2Fuploads%2Fsites%2F2%2F2022%2F08%2F20412_fotos_58-maracuja_bolo_fatia_540x400px58-300x300.png&name=Fresh%20Pine%20Apple%20Cake%20%20&weight=Be%20Happy%20Cafe&price=79" },
       
       
       
        { name: "Nescafe Ready To Drink Latte Can", img: "https://m.media-amazon.com/images/I/51zVMn8GdxL.jpg", weight: "180ml", price: "₹65", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51zVMn8GdxL.jpg&name=%20Nescafe%20Ready%20To%20Drink%20Latte%20Can&weight=180ml&price=65" },
        { name: "Coca Cola Can", img: "https://www.jiomart.com/images/product/original/490809341/coca-cola-300-ml-product-images-o490809341-p490809341-0-202210071748.jpg?im=Resize=(1000,1000)", weight: "300ml", price: "₹40", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.jiomart.com%2Fimages%2Fproduct%2Foriginal%2F490809341%2Fcoca-cola-300-ml-product-images-o490809341-p490809341-0-202210071748.jpg%3Fim%3DResize%3D(1000%2C1000)&name=%20Coca%20Cola%20%20Can&weight=300ml&price=40" },
        { name: "Sprite Can", img: "https://www.jiomart.com/images/product/original/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg?im=Resize=(420,420)", weight: "300ml", price: "₹40", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.jiomart.com%2Fimages%2Fproduct%2Foriginal%2F490809343%2Fsprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg%3Fim%3DResize%3D(420%2C420)&name=%20%20Sprite%20Can&weight=300ml&price=40" },
        { name: "Mountain Dew Soft Drink Can", img: "https://5.imimg.com/data5/SELLER/Default/2024/5/415667332/JB/MX/BW/142192266/250-ml-mountain-dew-cold-drinks-500x500.jpg", weight: "250ml", price: "₹40", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2024%2F5%2F415667332%2FJB%2FMX%2FBW%2F142192266%2F250-ml-mountain-dew-cold-drinks-500x500.jpg&name=Mountain%20Dew%20Soft%20Drink%20Can%20%20&weight=250ml&price=40" },
        { name: "Redbull Energy Drink can", img: "https://www.bigbasket.com/media/uploads/p/m/180961-3_5-red-bull-energy-drink.jpg", weight: "250ml", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fm%2F180961-3_5-red-bull-energy-drink.jpg&name=%20%20Redbull%20Energy%20Drink%20can&weight=250ml&price=99" },
        { name: "Sprite Bottle 750ml", img: "https://www.bigbasket.com/media/uploads/p/xl/251006_13-sprite-soft-drink-lime-flavoured.jpg", weight: "750ml", price: "₹45", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fxl%2F251006_13-sprite-soft-drink-lime-flavoured.jpg&name=%20%20Sprite%20%20Bottle%20750ml&weight=750ml&price=45" },
        { name: "Cocacola Soft Drink 750ml", img: "https://5.imimg.com/data5/EB/IC/QX/SELLER-48652903/750ml-coca-cola-soft-drink-500x500.jpg", weight: "750ml", price: "₹45", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FEB%2FIC%2FQX%2FSELLER-48652903%2F750ml-coca-cola-soft-drink-500x500.jpg&name=%20Cocacola%20Soft%20Drink%20750ml&weight=750ml&price=45" },
        { name: "Pepsi soft drink 750ml", img: "https://m.media-amazon.com/images/I/51J54vvDdJL.jpg", weight: "750ml", price: "₹45", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51J54vvDdJL.jpg&name=%20Pepsi%20soft%20drink%20750ml%20&weight=750ml&price=45" },
        { name: "Thums Up Soft Drink, 750 ml", img: "https://www.bigbasket.com/media/uploads/p/xl/251014_12-thums-up-soft-drink.jpg", weight: "750ml", price: "₹45", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fxl%2F251014_12-thums-up-soft-drink.jpg&name=%20Thums%20Up%20Soft%20Drink%2C%20750%20ml&weight=750ml&price=45" },
        { name: "Thums Up Soft Drink Can, 750 ml", img: "https://m.media-amazon.com/images/I/61yecBpCDhL.jpg", weight: "750ml", price: "₹45", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61yecBpCDhL.jpg&name=%20Thums%20Up%20Soft%20Drink%20Can%2C%20750%20ml&weight=750ml&price=45" },
    
        { name: "Earl grey tea", img: "https://cdn.intelligencebank.com/au/share/NOrD/1VN0z/eAXp0/preset=pB6BA/T125AE015_earl_grey_brewed_loose_leaf", weight: "Be Happy Cafe", price: "₹59", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fcdn.intelligencebank.com%2Fau%2Fshare%2FNOrD%2F1VN0z%2FeAXp0%2Fpreset%3DpB6BA%2FT125AE015_earl_grey_brewed_loose_leaf&name=%20Earl%20grey%20tea%20&weight=Be%20Happy%20Cafe&price=59" },
        { name: "Steamed Cow Milk", img: "https://atlas-content-cdn.pixelsquid.com/stock-images/milk-glass-Od917L2-600.jpg", weight: "Be Happy Cafe", price: "₹59", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fatlas-content-cdn.pixelsquid.com%2Fstock-images%2Fmilk-glass-Od917L2-600.jpg&name=Steamed%20Cow%20Milk%20&weight=Be%20Happy%20Cafe&price=59" },
        { name: "Masala Chai", img: "https://static.vecteezy.com/system/resources/previews/042/573/884/original/ai-generated-tasty-indian-masala-chai-with-spices-isolated-on-transparent-background-png.png", weight: "Be Happy Cafe", price: "₹59", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F042%2F573%2F884%2Foriginal%2Fai-generated-tasty-indian-masala-chai-with-spices-isolated-on-transparent-background-png.png&name=%20Masala%20Chai%20&weight=Be%20Happy%20Cafe&price=59" },
        { name: "Peppermint Tea", img: "https://png.pngtree.com/png-vector/20240226/ourmid/pngtree-green-tea-cup-with-mint-leaves-png-image_11876752.png", weight: "Be Happy Cafe", price: "₹59", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20240226%2Fourmid%2Fpngtree-green-tea-cup-with-mint-leaves-png-image_11876752.png&name=%20Peppermint%20Tea%20&weight=Be%20Happy%20Cafe&price=59" },
        { name: "Tulsi ginger tea", img: "https://5.imimg.com/data5/SELLER/Default/2023/10/356300700/JP/UA/SV/16612460/ginger-tulsi-tea.png", weight: "Be Happy Cafe", price: "₹59", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F10%2F356300700%2FJP%2FUA%2FSV%2F16612460%2Fginger-tulsi-tea.png&name=%20Tulsi%20ginger%20tea%20&weight=Be%20Happy%20Cafe&price=59" },
        { name: "Fresh Lemon Ginger Honey tea", img: "https://img.freepik.com/premium-photo/honey-lemon-ginger-tea-isolated-white-background-generative-ai_936711-2823.jpg", weight: "Be Happy Cafe", price: "₹59", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fhoney-lemon-ginger-tea-isolated-white-background-generative-ai_936711-2823.jpg&name=Fresh%20Lemon%20Ginger%20Honey%20tea&weight=Be%20Happy%20Cafe&price=59" },
        { name: "Pure Cow Milk Tea", img: "https://static.vecteezy.com/system/resources/previews/029/169/199/original/a-cup-of-milk-tea-on-transparent-background-ai-generated-free-png.png", weight: "Be Happy Cafe", price: "₹59", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F029%2F169%2F199%2Foriginal%2Fa-cup-of-milk-tea-on-transparent-background-ai-generated-free-png.png&name=Pure%20Cow%20Milk%20Tea&weight=Be%20Happy%20Cafe&price=59" },
    
        { name: "Chicken for Curry cut", img: "https://rahath.in/wp-content/uploads/2024/03/Chicken-Medium-Pieces-1KG.png", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Frahath.in%2Fwp-content%2Fuploads%2F2024%2F03%2FChicken-Medium-Pieces-1KG.png&name=Chicken%20for%20Curry%20cut%20&weight=1Kg&price=150    " },
        { name: "Fresh Chicken complete full 1kg", img: "https://www.meathouseindia.com/wp-content/uploads/2020/06/Chicken-with-skintop-view.png", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.meathouseindia.com%2Fwp-content%2Fuploads%2F2020%2F06%2FChicken-with-skintop-view.png&name=Fresh%20Chicken%20complete%20full&weight=1kg&price=130" },

        { name: "Chicken boneless for gymer", img: "https://www.bigbasket.com/media/uploads/p/l/102587_8-fresho-chicken-boneless.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fl%2F102587_8-fresho-chicken-boneless.jpg&name=Chicken%20boneless%20for%20gymer&weight=1kg&price=190" },
        { name: "Chicken boneless for gymer", img: "https://www.bigbasket.com/media/uploads/p/l/102587_8-fresho-chicken-boneless.jpg", url: "" },
        { name: "Fresh Chicken Leg Piece", img: "https://www.urbangroc.com/wp-content/uploads/2021/09/chicken-Drum-Stick-1.jpg.webp", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.urbangroc.com%2Fwp-content%2Fuploads%2F2021%2F09%2Fchicken-Drum-Stick-1.jpg.webp&name=Fresh%20Chicken%20Leg%20Piece&weight=5pc&price=150" },
        { name: "Chicken Breast for gymer", img: "https://s.alicdn.com/@sc04/kf/A9286f89374094e1bad1df4fa93e5f045o.jpg_300x300.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fs.alicdn.com%2F%40sc04%2Fkf%2FA9286f89374094e1bad1df4fa93e5f045o.jpg_300x300.jpg&name=Chicken%20Breast%20for%20gymer&weight=1kg&price=200" },

        { name: "Desi Chicken", img: "https://www.choosemycart.com/wp-content/uploads/2021/07/hen.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.choosemycart.com%2Fwp-content%2Fuploads%2F2021%2F07%2Fhen.jpg&name=Desi%20Chicken%20&weight=1kg&price=250" },
    
        { name: "Fresh Rohu Fish", img: "https://www.bigbasket.com/media/uploads/p/l/40119261_2-fresho-rohu-cut-pieces-medium.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fl%2F40119261_2-fresho-rohu-cut-pieces-medium.jpg&name=Fresh%20Rohu%20Fish&weight=1Kg&price=200" },
        { name: "Fresh Cat Fish", img: "https://meggro.com/wp-content/uploads/2022/07/Live-Catfish.webp", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fmeggro.com%2Fwp-content%2Fuploads%2F2022%2F07%2FLive-Catfish.webp&name=Fresh%20Cat%20Fish&weight=1kg&price=150" },
       
        { name: "Fresh Keski Fish", img: "https://jamunafoods.com/wp-content/uploads/2020/12/batashi-600x600.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fjamunafoods.com%2Fwp-content%2Fuploads%2F2020%2F12%2Fbatashi-600x600.jpg&name=Fresh%20Keski%20Fish&weight=500g&price=200" },
  
        { name: "Fresh Jingha Fish", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/seafood/k/l/n/dry-fish-dry-prawns-big-dry-shrimp-jhinga-prawn-zmz-original-imagrygfvq77bamm.jpeg?q=90&crop=false", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fxif0q%2Fseafood%2Fk%2Fl%2Fn%2Fdry-fish-dry-prawns-big-dry-shrimp-jhinga-prawn-zmz-original-imagrygfvq77bamm.jpeg%3Fq%3D90%26crop%3Dfalse&name=Fresh%20Jingha%20Fish&weight=100g&price=50" },
    
        { name: "Freash Goat Meat 1Kg", img: "https://storage.googleapis.com/shy-pub/60613/1695888734141_SKU-1564_0.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fstorage.googleapis.com%2Fshy-pub%2F60613%2F1695888734141_SKU-1564_0.jpg&name=Freash%20Goat%20Meat%201Kg&weight=&price=700" },
        { name: "Freash Goat Meat 500g", img: "https://storage.googleapis.com/shy-pub/60613/1695888734141_SKU-1564_0.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fstorage.googleapis.com%2Fshy-pub%2F60613%2F1695888734141_SKU-1564_0.jpg&name=Freash%20Goat%20Meat%20500g&weight=&price=350" },
        
        { name: "Egg Tray", img: "https://images.jdmagicbox.com/quickquotes/images_main/paper-egg-tray-2216899931-k6kt2hv0.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fimages.jdmagicbox.com%2Fquickquotes%2Fimages_main%2Fpaper-egg-tray-2216899931-k6kt2hv0.jpg&name=Egg%20Tray&weight=1Tray&price=150" },

        { name: "Everest Chicken Masala", img: "Image/masalasss.png", url: "https://www.dailyy.in/product-details.html?img=Image%2Fmasalasss.png&name=Everest%20Chicken%20Masala&weight=100g&price=92" },
        { name: "Catch Chicken Masala", img: "https://m.media-amazon.com/images/I/71usqRAZlSL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71usqRAZlSL.jpg&name=Catch%20Chicken%20Masala&weight=100g&price=59" },
        { name: "MDH Chicken Masala", img: "https://m.media-amazon.com/images/I/81sNx-neOaL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81sNx-neOaL.jpg&name=MDH%20Chicken%20Masala&weight=100g&price=73" },
        { name: "Everest Tandoori Chicken Masala Powder", img: "https://m.media-amazon.com/images/I/81cHKbEesHL._AC_UF894,1000_QL80_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81cHKbEesHL._AC_UF894%2C1000_QL80_.jpg&name=Everest%20Tandoori%20Chicken%20Masala%20Powder&weight=100g&price=70" },
        { name: "Everest Meat Masala Powder", img: "https://m.media-amazon.com/images/I/81UH7pyz+cL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81UH7pyz%2BcL.jpg&name=Everest%20Meat%20Masala%20Powder&weight=100g&price=62" },
        { name: "Catch Meat Masala", img: "https://www.netmeds.com/images/product-v1/600x600/909649/meat_masala_100_gm_0_0.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.netmeds.com%2Fimages%2Fproduct-v1%2F600x600%2F909649%2Fmeat_masala_100_gm_0_0.jpg&name=Catch%20Meat%20Masala&weight=100g&price=65" },
        { name: "MDH Powder - Tandoori Chicken Masala", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlPrzv450HYocQMAdjGsEdGsqXPubmrsJAA&s", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTJlPrzv450HYocQMAdjGsEdGsqXPubmrsJAA%26s&name=MDH%20Powder%20-%20Tandoori%20Chicken%20Masala&weight=100g&price=94" },
        { name: "Everest Garam Masala", img: "https://www.bigbasket.com/media/uploads/p/l/268943-2_2-everest-garam-masala.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fl%2F268943-2_2-everest-garam-masala.jpg&name=Everest%20Garam%20Masala&weight=100g&price=75" },
        { name: "MDH Garam Masala", img: "https://og-mart.in/cdn/shop/files/GARAM-01-FRONT_1280x.jpg?v=1695104010", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fog-mart.in%2Fcdn%2Fshop%2Ffiles%2FGARAM-01-FRONT_1280x.jpg%3Fv%3D1695104010&name=MDH%20Garam%20Masala&weight=100g&price=95" },
        { name: "Everest Powder - Fish Curry Masala", img: "https://m.media-amazon.com/images/I/817rZQ5gILL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F817rZQ5gILL._SL1500_.jpg&name=Everest%20Powder%20-%20Fish%20Curry%20Masala&weight=50g&price=47" },
    

        
    
        
        { name: "Rupa Underwear 90cm", img: "Image/cloths/rupa.webp", weight: "90CM", price: "₹100", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Frupa.webp&name=Rupa%20Underwear%20&weight=90CM&price=100" },
        { name: "Rupa Underwear 85cm", img: "Image/cloths/rupa.webp", weight: "85CM", price: "₹100", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Frupa.webp&name=Rupa%20Underwear%20&weight=85CM&price=100" },
        { name: "Rupa Underwear Full 85cm", img: "Image/cloths/rupablue.webp", weight: "85CM", price: "₹110", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Frupablue.webp&name=Rupa%20%20Underwear%20Full&weight=85CM&price=110" },
        { name: "Rupa Underwear Full 90cm", img: "Image/cloths/rupablue.webp", weight: "90CM", price: "₹110", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Frupablue.webp&name=Rupa%20Underwear%20Full%20&weight=90CM&price=110" },
        { name: "Micronman Underwear 90cm", img: "Image/cloths/microman.webp", weight: "90CM", price: "₹110", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fmicroman.webp&name=Micronman%20Underwear%20&weight=90CM&price=110" },
        { name: "Macho Underwear 85cm", img: "Image/cloths/macho.jpg", weight: "85CM", price: "₹100", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fmacho.jpg&name=Macho%20Underwear&weight=85CM&price=100" },
        { name: "Jockey Full Underwear Black 85cm", img: "Image/cloths/jokey.webp", weight: "85CM", price: "₹599", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fjokey.webp&name=Jockey%20Full%20Underwear%20Black&weight=85CM&price=599" },
        { name: "Jockey Full Boxer Underwear", img: "Image/cloths/boxer.jpg", weight: "85CM", price: "₹599", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fboxer.jpg&name=Jockey%20Full%20Boxer%20Underwear&weight=85CM&price=599" },
    
        // { name: "Rupa Frontline Vest", img: "Image/cloths/vest.webp", weight: "90CM", price: "₹110", url: "" },
        { name: "Rupa Frontline Vest 90cm", img: "Image/cloths/vest.webp", weight: "85CM", price: "₹110", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fvest.webp&name=Rupa%20Frontline%20Vest&weight=90CM&price=110" },
        { name: "Rupa Frontline Vest 85cm", img: "Image/cloths/vest.webp", weight: "90CM", price: "₹110", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fvest.webp&name=Rupa%20Frontline%20Vest&weight=85CM&price=110" },
        { name: "Rupa Hunk Red Color Vest 85cm", img: "Image/cloths/hunk.jpg", weight: "85CM", price: "₹202", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fhunk.jpg&name=Rupa%20Hunk%20Red%20Color%20Vest&weight=85CM&price=202" },
        { name: "HUNK 73 GYM VEST ASSORTED 85Cm", img: "Image/cloths/strip.jpg", weight: "85CM", price: "₹202", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fstrip.jpg&name=HUNK%2073%20GYM%20VEST%20ASSORTED&weight=85CM&price=202" },
        { name: "HUNK 7011 GYM VEST ASSORTED 85cm", img: "Image/cloths/hunkblue.jpg", weight: "85CM", price: "₹213", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fhunkblue.jpg&name=HUNK%207011%20GYM%20VEST%20ASSORTED%20&weight=85CM&price=213" },
        { name: "HUNK 96 MUSCLE TEE ASSORTED 85cm", img: "Image/cloths/hunkcolor.jpg", weight: "85CM", price: "₹213", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fhunkcolor.jpg&name=HUNK%2096%20MUSCLE%20TEE%20ASSORTED&weight=85CM&price=213" },
        { name: "HUNK 82 MUSCLE TEE ASSORTED 85cm", img: "Image/cloths/bluestrip.jpg", weight: "85CM", price: "₹213", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fbluestrip.jpg&name=HUNK%2082%20MUSCLE%20TEE%20ASSORTED&weight=85CM&price=213" },
        { name: "HUNK 102 GYM VEST ASSORTED 85cm", img: "Image/cloths/grey.jpg", weight: "85CM", price: "₹202", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fgrey.jpg&name=HUNK%20102%20GYM%20VEST%20ASSORTED&weight=85CM&price=202" },
    
        { name: "School white socks short", img: "Image/cloths/socks11.webp", weight: "", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fsocks11.webp&name=School%20white%20socks%20short&weight=&price=79" },
        { name: "School white socks Long", img: "Image/cloths/socks1.webp", weight: "", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fsocks1.webp&name=School%20white%20socks%20Long&weight=&price=99" },
        { name: "School Black socks short", img: "Image/cloths/black.webp", weight: "", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fblack.webp&name=School%20Black%20socks%20short&weight=&price=79" },
        { name: "School Black socks Long", img: "Image/cloths/socks2.webp", weight: "", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fsocks2.webp&name=School%20Black%20socks%20Long&weight=&price=99" },
        { name: "School Blue socks short", img: "Image/cloths/blue.webp", weight: "", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fblue.webp&name=%20School%20Blue%20socks%20short&weight=&price=79" },
        { name: "School Blue socks Long", img: "Image/cloths/blue.webp", weight: "", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fblue.webp&name=%20School%20Blue%20socks%20Long&weight=&price=99" },
        { name: "Cotton Black Long Socks", img: "Image/cloths/set.png", weight: "", price: "₹99", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fset.png&name=Cotton%20Black%20Long%20Socks&weight=&price=99" },
        { name: "Black Cotton short Socks", img: "Image/cloths/sets.jpg", weight: "", price: "₹49", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fsets.jpg&name=Black%20Cotton%20short%20Socks&weight=&price=49" },
        { name: "Winter Long Grey Socks", img: "Image/cloths/winter.avif", weight: "", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fwinter.avif&name=Winter%20Long%20Grey%20Socks&weight=&price=79" },
        { name: "Winter Blue Grey socks", img: "Image/cloths/grry.webp", weight: "", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fgrry.webp&name=Winter%20Blue%20Grey%20socks&weight=&price=79" },
        { name: "Ladies Brown Toe Socks", img: "Image/cloths/ladies1.png", weight: "", price: "₹89", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fladies1.png&name=Ladies%20Brown%20Toe%20Socks&weight=&price=89" },
        { name: "Printed Pink girl short socks", img: "Image/cloths/printed.png", weight: "", price: "₹89", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fprinted.png&name=Printed%20Pink%20girl%20short%20socks&weight=&price=89" },
        { name: "Printed Yellow girl short socks", img: "Image/cloths/printed1.png", weight: "", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fprinted1.png&name=Printed%20Yellow%20girl%20short%20socks&weight=&price=79" },
        { name: "Men extra short socks set 3pc", img: "Image/cloths/short.png", weight: "", price: "₹89", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fshort.png&name=Men%20extra%20short%20socks%20set%203pc&weight=&price=89" },
        { name: "Men Black extra short socks", img: "Image/cloths/socksss.webp", weight: "", price: "₹39", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fsocksss.webp&name=Men%20Black%20extra%20short%20socks%20&weight=&price=39" },
        { name: "Baby pink socks", img: "Image/cloths/baby.jpeg", weight: "", price: "₹39", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fbaby.jpeg&name=Baby%20pink%20socks&weight=&price=39" },
        { name: "Baby Woollen set socks 4pc", img: "Image/cloths/babyset.avif", weight: "", price: "₹119", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fbabyset.avif&name=Baby%20Woollen%20set%20socks%204pc&weight=&price=119" },
        { name: "School Silver socks", img: "Image/cloths/silversock.jpg", weight: "", price: "₹49", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fsilversock.jpg&name=School%20Silver%20socks&weight=&price=49" },
    
        { name: "Cotton White Blue Hanky", img: "Image/cloths/hacky.avif", weight: "", price: "₹59", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fhacky.avif&name=Cotton%20White%20Blue%20Hanky&weight=&price=59" },
        { name: "Cotton White Blue Hanky 4pc Box", img: "Image/cloths/hackyset.jpg", weight: "", price: "₹149", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fhackyset.jpg&name=Cotton%20White%20Blue%20Hanky%204pc%20Box&weight=&price=149" },
        { name: "Cotton Blue Brown Hanky 4pc Box", img: "Image/cloths/hacky2.png", weight: "", price: "₹149", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fhacky2.png&name=Cotton%20%20Blue%20Brown%20Hanky%204pc%20Box&weight=&price=149" },
        { name: "Cotton white hacky", img: "Image/cloths/hacky3.jpg", weight: "", price: "₹59", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fhacky3.jpg&name=Cotton%20white%20hacky&weight=&price=59" },
        { name: "White Gamchi cotton", img: "Image/cloths/hacky11.jpg", weight: "", price: "₹149", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fhacky11.jpg&name=White%20Gamchi%20%20cotton&weight=&price=149" },
        { name: "White Gamchi design border", img: "Image/cloths/hacky22.webp", weight: "", price: "₹179", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fhacky22.webp&name=White%20Gamchi%20design%20border&weight=&price=179" },
        { name: "Orange gamchi design border", img: "Image/cloths/hacky33.webp", weight: "", price: "₹159", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fhacky33.webp&name=Orange%20gamchi%20design%20border&weight=&price=159" },
        { name: "Blue strip cotton Lungi", img: "Image/cloths/lungi.jpg", weight: "", price: "₹599", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Flungi.jpg&name=Blue%20strip%20cotton%20Lungi&weight=&price=599" },
        { name: "999 Blue strip cotton Lungi", img: "Image/cloths/lungi1.jpg", weight: "", price: "₹599", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Flungi1.jpg&name=999%20Blue%20strip%20cotton%20Lungi%20&weight=&price=599" },
        { name: "Yellow Gamchi design border", img: "Image/cloths/yellow.webp", weight: "", price: "₹159", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fyellow.webp&name=Uellow%20Gamchi%20design%20broder&weight=&price=159" },
    
    
        { name: "Softline White Tops", img: "Image/cloths/girlvest.jpg", weight: "75CM", price: "₹119", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fgirlvest.jpg&name=Softline%20White%20Tops%20&weight=75CM&price=119" },
        { name: "Amul Comfy Girl White Tops", img: "Image/cloths/amulcomfy3.jpg", weight: "80CM", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Famulcomfy3.jpg&name=Amul%20Comfy%20Girl%20White%20Tops&weight=80CM&price=79" },
        { name: "Softline White Tops", img: "Image/cloths/girlvest.jpg", weight: "85CM", price: "₹119", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fgirlvest.jpg&name=Softline%20White%20Tops%20&weight=85CM&price=119" },
        { name: "Softline Black Tops 75cm", img: "Image/cloths/blackvest.jpg", weight: "75CM", price: "₹119", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Fblackvest.jpg&name=Softline%20Black%20Tops&weight=75CM&price=119" },
        // { name: "Softline Black Tops", img: "Image/cloths/blackvest.jpg", weight: "75CM", price: "₹119", url: "" },
        { name: "Amul Comfy Girl Pink Tops 85cm", img: "Image/cloths/amulcomfy2.jpg", weight: "85CM", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Famulcomfy2.jpg&name=Amul%20Comfy%20Girl%20Pink%20Tops&weight=85CM&price=79" },
        { name: "Amul Comfy Girl Skyblue Tops 90cm", img: "Image/cloths/amulcomfy1.jpg", weight: "75CM", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Famulcomfy1.jpg&name=Amul%20Comfy%20Girl%20Skyblue%20Tops&weight=75CM&price=79" },
        { name: "Amul Comfy Girl Skyblue Tops 80cm", img: "Image/cloths/amulcomfy1.jpg", weight: "80CM", price: "₹79", url: "https://www.dailyy.in/product-details.html?img=Image%2Fcloths%2Famulcomfy1.jpg&name=Amul%20Comfy%20Girl%20Skyblue%20Tops&weight=80CM&price=79" },

    
        // { name: "Lux Inferno Women Top", img: "Image/cloths/inner1.jpg", weight: "85CM", price: "₹378", url: "" },
        // { name: "Amul BodyWarner Men Lower", img: "Image/cloths/inner2.jpg", weight: "85CM", price: "₹350", url: "" },
        // { name: "Amul BodyWarner Men Top", img: "Image/cloths/inner3.jpg", weight: "85CM", price: "₹350", url: "" },
        // { name: "Lux inferno women set", img: "Image/cloths/inner4.jpg", weight: "85CM", price: "₹799", url: "" },
        // { name: "Lux Inferno Men Top", img: "Image/cloths/lux-inferno.webp", weight: "90CM", price: "₹350", url: "" },
        // { name: "Lux Inferno Men top", img: "Image/cloths/lux.png", weight: "85CM", price: "₹340", url: "" },
        // { name: "Lux Inferno Men top", img: "Image/cloths/lux2.png", weight: "95CM", price: "₹360", url: "" },
        // { name: "Men Bodywarmer Lower", img: "Image/cloths/Amul1.png", weight: "85CM", price: "₹360", url: "" },
        // { name: "Men BodyWarmer top", img: "Image/cloths/Amul2.png", weight: "85CM", price: "₹350", url: "" },
        // { name: "Amul Body Warmer women set", img: "Image/cloths/Amul3.png", weight: "85CM", price: "₹350", url: "" },
    
        // { name: "Navy Blue Muffler", img: "Image/cloths/bluemulfer.jpg", weight: "Kids", price: "₹130", url: "" },
        // { name: "Black Mulfer", img: "Image/cloths/blackmulfer.jpg", weight: "Men", price: "₹150", url: "" },
        // { name: "Black Mulfer", img: "Image/cloths/blackm.jpg", weight: "kids", price: "₹130", url: "" },
        // { name: "Purewool Blue mulfer", img: "Image/cloths/rangin.jpeg", weight: "Men", price: "₹180", url: "" },
        // { name: "Brown simple Mufler", img: "Image/cloths/brownm.jpeg", weight: "Men", price: "₹150", url: "" },
        // { name: "Purewool Brown Mulfer", img: "Image/cloths/brownmwool.jpg", weight: "Men", price: "", url: "" },
        // { name: "Black Cap and mufler", img: "Image/cloths/cap1.jpg", weight: "Men", price: "₹250", url: "" },
        // { name: "Cream Cap winter", img: "Image/cloths/cap2.jpg", weight: "Men", price: "₹230", url: "" },
        // { name: "Black Cap winter", img: "Image/cloths/cap3.jpg", weight: "Men", price: "₹230", url: "" },
        // { name: "Black wool Cap winter", img: "Image/cloths/blackcap.jpg", weight: "Men", price: "₹250", url: "" },
    
        { name: "Veg Chowmin Full", img: "Image/food/Chowmin.png", weight: "Market", price: "₹60", url: "https://www.dailyy.in/product-details.html?name=%20Veg%20Chowmin%20Full%20&price=60&weight=Market&img=Image%2Ffood%2FChowmin.png" },
        { name: "Egg Chowmin Full", img: "Image/food/pasta.png", weight: "Fujiya Green Restaurant", price: "₹120", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fpasta.png&name=%20Egg%20Chowmin%20Full&weight=Fujiya%20Green%20Restaurant&price=120" },
        { name: "Veg Chowmin Half", img: "Image/food/Chowmin.png", weight: "Market", price: "₹30", url: "" },
        { name: "Veg Momos Full plate", img: "Image/food/momos.png", weight: "Market", price: "₹60", url: "" },
        { name: "Veg Momoms Full plate", img: "Image/food/momome.webp", weight: "Fujiya Green Restaurant", price: "₹60", url: "" },
        { name: "Veg Momoms Full plate", img: "Image/food/momoms.webp", weight: "Fujiya Green Restaurant", price: "₹60", url: "" },
        { name: "Friend Veg Momoms Full", img: "Image/food/firedmomo.png", weight: "Market", price: "₹60", url: "" },
        { name: "Friedn Chicken Momoms Full", img: "Image/food/chmomo.webp", weight: "Fujiya Green Restaurant", price: "₹60", url: "" },
        { name: "Chicken Chowmin", img: "Image/food/chcikenchowmin.png", weight: "Market", price: "₹50", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fchcikenchowmin.png&name=Chicken%20Chowmin&weight=Market&price=50" },
        { name: "Egg Chowmin Full", img: "Image/food/eggch.png", weight: "Fujiya Green Restaurant", price: "₹120", url: "" },
        { name: "Chicken Chowmin", img: "Image/food/chcikenchowmin.png", weight: "Market", price: "₹100", url: "" },
        { name: "Chicken Chowmin Full", img: "Image/food/chcikenchowmin.png", weight: "Fujiya Green Restaurant", price: "₹100", url: "" },
        { name: "Egg Chowmin Full", img: "Image/food/eggs.webp", weight: "Market", price: "₹80", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Feggs.webp&name=Egg%20Chowmin%20Full%20&weight=Market&price=80" },
        { name: "Veg Chowmin Full", img: "Image/food/fujiyachowminAC.png", weight: "Fujiya Green Restaurant", price: "₹120", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2FfujiyachowminAC.png&name=Veg%20Chowmin%20Full%20&weight=Fujiya%20Green%20Restaurant&price=120" },
    
    
        { name: "Chickin Chilli Full", img: "Image/food/chicken.png", weight: "Fujiya Green Restaurant", price: "₹150", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fchicken.png&name=Chickin%20Chilli%20Full&weight=Fujiya%20Green%20Restaurant&price=150" },
        { name: "Chickin Chilli Full", img: "Image/food/chickenchillis.png", weight: "Market", price: "₹100", url: "" },
        { name: "Chicken curry Full", img: "Image/food/curry.png", weight: "Fujiya Green Restaurant", price: "₹150", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fcurry.png&name=Chicken%20curry%20Full&weight=Fujiya%20Green%20Restaurant&price=150" },
        { name: "Paneer Chill Fulli", img: "Image/food/panners.png", weight: "Tofu Restaurant", price: "₹180", url: "" },
        { name: "Panner Chilli Full", img: "Image/food/panner.png", weight: "Fujiya Green Restaurant", price: "₹150", url: "" },
        { name: "Panner Chilli Half", img: "Image/food/panners.png", weight: "Tofu Restaurant", price: "₹90", url: "" },
        { name: "Panner Chilli Half", img: "Image/food/panner1.png", weight: "Market", price: "₹150", url: "" },
        { name: "Panner Chilli Full", img: "Image/food/panner.png", weight: "Fujiya Green Restaurant", price: "₹90", url: "" },
        { name: "Paneer Chilli Full", img: "Image/food/panner1.png", weight: "Market", price: "₹80", url: "" },
        { name: "Chicken curry Half", img: "Image/food/curry.png", weight: "Fujiya Green Restaurant", price: "₹90", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fcurry.png&name=Chicken%20curry%20Half&weight=Fujiya%20Green%20Restaurant&price=90" },
        { name: "Chickin Chilli Half", img: "Image/food/chickenchillis.png", weight: "Market", price: "₹50", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fchickenchillis.png&name=Chickin%20Chilli%20Half&weight=Market&price=50" },
        { name: "Fry Chicken Full", img: "Image/food/chickenleg.jpeg", weight: "Fujiya Green Restaurant", price: "₹150", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fchickenleg.jpeg&name=Fry%20Chicken%20Full&weight=Fujiya%20Green%20Restaurant&price=150" },
    
        { name: "Special Chaat", img: "Image/food/chaata.png", weight: "Market", price: "₹50", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fchaata.png&name=Special%20Chaat&weight=Market&price=50" },
        { name: "Spicy Chaat", img: "Image/food/chaata.png", weight: "Magadh tasty sweets", price: "₹50", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fchaata.png&name=Spicy%20Chaat&weight=Magadh%20tasty%20sweets&price=50" },
        { name: "Hot Crunchy Samosha 2pc", img: "Image/food/samosa.png", weight: "Prachi Sweets", price: "₹20", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fsamosa.png&name=Hot%20Crunchy%20Samosha%202pc&weight=Prachi%20Sweets&price=20" },
        { name: "Hot Samosha 2pc", img: "Image/food/samosa.png", weight: "Market", price: "₹20", url: "" },
        { name: "Dahi Vada", img: "Image/food/dahibada.png", weight: "Market", price: "₹20", url: "" },
        { name: "Masala Dosa", img: "Image/food/masaldosa.png", weight: "RamSevak", price: "₹60", url: "https://www.dailyy.in/product-details.html?img=Image%2Ffood%2Fmasaldosa.png&name=Masala%20Dosa&weight=RamSevak&price=60" },
    
        { name: "Cycle Pure Agarbatti Three in One", img: "https://m.media-amazon.com/images/I/61BuoNQ2mPL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61BuoNQ2mPL.jpg&name=Cycle%20Pure%20Agarbatti%20Three%20in%20One&weight=&price=279" },
        { name: "Cycle Lia Chandanam Agarbatt Sticks", img: "https://cycle.in/cdn/shop/files/05_3d3149ac-29cb-4a13-afdf-8bf6bca3c5a2.jpg?v=1718881777&width=640", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fcycle.in%2Fcdn%2Fshop%2Ffiles%2F05_3d3149ac-29cb-4a13-afdf-8bf6bca3c5a2.jpg%3Fv%3D1718881777%26width%3D640&name=Cycle%20Lia%20Chandanam%20Agarbatt%20Sticks&weight=&price=20" },
        { name: "Mangaldeep Chandan 3in1 Agarbatti", img: "https://www.bigbasket.com/media/uploads/p/l/40275425_1-mangaldeep-chandan-3-in-1-agarbatti-soothing-fragrances-of-classic-rose-jasmine.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fl%2F40275425_1-mangaldeep-chandan-3-in-1-agarbatti-soothing-fragrances-of-classic-rose-jasmine.jpg&name=Mangaldeep%20Chandan%203in1%20Agarbatti%20&weight=&price=98" },
        { name: "Lia Agarbatti Pack Of 3", img: "https://m.media-amazon.com/images/I/61ueNvz2HIL.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61ueNvz2HIL.jpg&name=Lia%20Agarbatti%20Pack%20Of%203%20&weight=&price=309" },
        { name: "Agarbati Small Stand", img: "https://giri.in/cdn/shop/files/52503792_BS_Agarbathi_Stand_Star_No2_0.040_Kgs_1_600x600.jpg?v=1707554666", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fgiri.in%2Fcdn%2Fshop%2Ffiles%2F52503792_BS_Agarbathi_Stand_Star_No2_0.040_Kgs_1_600x600.jpg%3Fv%3D1707554666&name=Agarbati%20Small%20Stand&weight=Brass%20Material&price=250" },
        { name: "Agarbati Pital Small Stand", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/incense-holder/8/t/x/brass-incense-holder-5-5-cm-dokchan-original-imagj5ynygjhuvbb.jpeg?q=90&crop=false", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fxif0q%2Fincense-holder%2F8%2Ft%2Fx%2Fbrass-incense-holder-5-5-cm-dokchan-original-imagj5ynygjhuvbb.jpeg%3Fq%3D90%26crop%3Dfalse&name=Agarbati%20Pital%20Small%20Stand&weight=Smallest&price=279" },
        { name: "Mangaldeep Chandan Geela Agarbati", img: "https://deepkalash.com/wp-content/uploads/2024/05/Mangaldeep-Chandan-Dry-Dhoop.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fdeepkalash.com%2Fwp-content%2Fuploads%2F2024%2F05%2FMangaldeep-Chandan-Dry-Dhoop.jpg&name=Mangaldeep%20Chandan%20Geela%20Agarbati&weight=&price=10" },
        { name: "Mangaldeep Gulab Geela Agarbati", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5N9o-8EXaXRfHmeW6mLUZIBOWiDmEo1XLuA&s", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQ5N9o-8EXaXRfHmeW6mLUZIBOWiDmEo1XLuA%26s&name=Mangaldeep%20Gulab%20Geela%20Agarbati%20&weight=1packet&price=10" },
    
        { name: "Big Mata Red Chunri", img: "https://www.satvikworld.com/cdn/shop/products/1_4_679b5e9f-17e5-41fc-8833-f206c9242404.jpg?v=1691160537", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.satvikworld.com%2Fcdn%2Fshop%2Fproducts%2F1_4_679b5e9f-17e5-41fc-8833-f206c9242404.jpg%3Fv%3D1691160537&name=Big%20Mata%20Red%20Chunri&weight=&price=50" },
        { name: "White dhoti for pooja", img: "https://exclusivedhoties.com/cdn/shop/products/EXD732-4Brown_1200x1200.jpg?v=1662450073", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fexclusivedhoties.com%2Fcdn%2Fshop%2Fproducts%2FEXD732-4Brown_1200x1200.jpg%3Fv%3D1662450073&name=White%20dhoti%20for%20pooja&weight=&price=250" },
        { name: "Pooja Dhup 250g", img: "Image/Pujaitems/dhup.png", url: "https://www.dailyy.in/product-details.html?img=Image%2FPujaitems%2Fdhup.png&name=Pooja%20Dhup%20250g&weight=&price=60" },
        { name: "Chota Mata Red Chunri", img: "https://www.picclickimg.com/sr0AAOSw8Udie6sI/Indian-Traditional-Net-Fabric-Devi-Mata-Ki-Chunari.webp", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.picclickimg.com%2Fsr0AAOSw8Udie6sI%2FIndian-Traditional-Net-Fabric-Devi-Mata-Ki-Chunari.webp&name=Chota%20Mata%20Red%20Chunri&weight=&price=35" },
        { name: "Jhalar Mata Red Chunri", img: "https://m.media-amazon.com/images/I/91UedzSPjQL._AC_UY1100_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F91UedzSPjQL._AC_UY1100_.jpg&name=Jhalar%20Mata%20Red%20Chunri&weight=&price=50" },
        { name: "SaraSwati kapoor 50g", img: "https://5.imimg.com/data5/ECOM/Default/2024/1/375645857/PK/EJ/AR/109941460/saraswati-kapoor-1702469567075-sku-1119-0.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FECOM%2FDefault%2F2024%2F1%2F375645857%2FPK%2FEJ%2FAR%2F109941460%2Fsaraswati-kapoor-1702469567075-sku-1119-0.jpg&name=SaraSwati%20kapoor%2050g&weight=&price=150" },
        { name: "Moli Dhaga", img: "https://www.pilgrimaide.com/image/cache/catalog/01%20Dec%202022%20onwards/new%20pooja%20samgri/moli%2025-550x550.png", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.pilgrimaide.com%2Fimage%2Fcache%2Fcatalog%2F01%2520Dec%25202022%2520onwards%2Fnew%2520pooja%2520samgri%2Fmoli%252025-550x550.png&name=Moli%20Dhaga&weight=1%20packet&price=10" },
        { name: "Pooja Ghee 100g", img: "https://www.poojn.in/wp-content/uploads/2022/09/0003.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.poojn.in%2Fwp-content%2Fuploads%2F2022%2F09%2F0003.jpg&name=Pooja%20Ghee%20100g&weight=Pooja%20Ghee&price=50" },
        { name: "Diabatti for Pooja", img: "https://images.glowroad.com/faceview/eg/aa/j3i/b1e/imgs/32343d66-22ff-4a57-9461-da8498ef539a_14980046-xlgn400x400.jpg?productId=P-12474502", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fimages.glowroad.com%2Ffaceview%2Feg%2Faa%2Fj3i%2Fb1e%2Fimgs%2F32343d66-22ff-4a57-9461-da8498ef539a_14980046-xlgn400x400.jpg%3FproductId%3DP-12474502&name=Diabatti%20for%20Pooja&weight=1%20packet&price=20" },
        { name: "Lal Small Chowki Aasan", img: "https://www.astromantra.com/wp-content/uploads/2023/01/Lal-Chowki-Aasan.webp", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.astromantra.com%2Fwp-content%2Fuploads%2F2023%2F01%2FLal-Chowki-Aasan.webp&name=Lal%20Small%20Chowki%20Aasan&weight=&price=60" },
        { name: "Lal Rodi for pooja", img: "https://buykharibaoli.com/wp-content/uploads/2023/09/6481a68442f81225192e478a-natural-laal-kumkum-roli-sindoor-for.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fbuykharibaoli.com%2Fwp-content%2Fuploads%2F2023%2F09%2F6481a68442f81225192e478a-natural-laal-kumkum-roli-sindoor-for.jpg&name=Lal%20Rodi%20for%20pooja&weight=50g&price=10" },
        { name: "Chandan Powder for pooja", img: "https://5.imimg.com/data5/ON/OJ/MY-2515406/pooja-chandan-powder-500x500.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FON%2FOJ%2FMY-2515406%2Fpooja-chandan-powder-500x500.jpg&name=Chandan%20Powder%20for%20pooja&weight=20g&price=30" },
        { name: "Aim Yellow Match Box", img: "https://www.bigbasket.com/media/uploads/p/l/1227175_1-aim-matches-box.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fl%2F1227175_1-aim-matches-box.jpg&name=Aim%20Yellow%20Match%20Box%20&weight=3%20peice&price=3" },
        { name: "Aim Packet Match Box", img: "https://ritikart.com/cdn/shop/products/aim-500x500.jpg?v=1592666898", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fritikart.com%2Fcdn%2Fshop%2Fproducts%2Faim-500x500.jpg%3Fv%3D1592666898&name=Aim%20Packet%20Match%20Box&weight=1%20packet&price=10" },
        { name: "Honey for Pooja", img: "https://www.navkaarcreation.com/image/cache/catalog/Puja%20accessories/havan-26-500x500.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.navkaarcreation.com%2Fimage%2Fcache%2Fcatalog%2FPuja%2520accessories%2Fhavan-26-500x500.jpg&name=Honey%20for%20Pooja&weight=Small&price=10" },
        { name: "Pooja Lal Sindur", img: "https://m.media-amazon.com/images/I/41qIRvWIq1L._AC_UF894,1000_QL80_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41qIRvWIq1L._AC_UF894%2C1000_QL80_.jpg&name=Pooja%20Lal%20Sindur&weight=1%20packet&price=10" },
        { name: "Mishri For Pooja", img: "https://www.picclickimg.com/nesAAOSwMEhju~iu/MISHRI-MISRI-SUGAR-CRYSTALS-POOJA-PUJA-ESSENTIALS-TEMPLE.webp", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.picclickimg.com%2FnesAAOSwMEhju~iu%2FMISHRI-MISRI-SUGAR-CRYSTALS-POOJA-PUJA-ESSENTIALS-TEMPLE.webp&name=Mishri%20For%20Pooja&weight=100g&price=15" },
        { name: "Sudha Healthy Toned Milk", img: "https://5.imimg.com/data5/NU/LA/GLADMIN-10870697/sudha-healthy-toned-milk-500x500.png", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FNU%2FLA%2FGLADMIN-10870697%2Fsudha-healthy-toned-milk-500x500.png&name=Sudha%20Healthy%20Toned%20Milk&weight=1kg&price=30" },
        { name: "Pachmeva", img: "https://www.pujagoodies.com/wp-content/uploads/2021/04/511WRHgzElL._SX679_.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.pujagoodies.com%2Fwp-content%2Fuploads%2F2021%2F04%2F511WRHgzElL._SX679_.jpg&name=Pachmeva%20&weight=100g&price=30" },
       
       
       
        { name: "Pooja Phool Mix", img: "https://www.bigbasket.com/media/uploads/p/xl/40168132_4-fresho-puja-flower-mix.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fxl%2F40168132_4-fresho-puja-flower-mix.jpg&name=Pooja%20Phool%20Mix&weight=50g&price=30" },
        { name: "Fresh Genda Fool", img: "https://5.imimg.com/data5/SELLER/Default/2023/10/349016138/SO/SR/XH/112348551/undefined-500x500.png", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2023%2F10%2F349016138%2FSO%2FSR%2FXH%2F112348551%2Fundefined-500x500.png&name=Fresh%20Genda%20Fool&weight=200g&price=120" },
        { name: "Fresh Mix Genda Fool", img: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65c700431646c5691d2e69f9/mixed-flower-250gm-640x640.png", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.mystore.in%2Fs%2F62ea2c599d1398fa16dbae0a%2F65c700431646c5691d2e69f9%2Fmixed-flower-250gm-640x640.png&name=Fresh%20Mix%20Genda%20Fool&weight=200g&price=120" },
        { name: "Genda Flower Mala", img: "https://5.imimg.com/data5/OX/YX/OV/SELLER-79215872/artificial-flowers-marigold-genda-phool-for-home-decoration-approx-4-5-ft-pack-of-5-phool-mala.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2F5.imimg.com%2Fdata5%2FOX%2FYX%2FOV%2FSELLER-79215872%2Fartificial-flowers-marigold-genda-phool-for-home-decoration-approx-4-5-ft-pack-of-5-phool-mala.jpg&name=Genda%20Flower%20Mala&weight=Per%20Piece&price=30" },
        { name: "Fresh Red Rose for Pooja", img: "https://apnaecart.com/uploads/product/1714123844_c4783b9d65550cf52f30.png", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fapnaecart.com%2Fuploads%2Fproduct%2F1714123844_c4783b9d65550cf52f30.png&name=Fresh%20Red%20Rose%20for%20Pooja&weight=100g&price=80" },
        { name: "Fresh Mix Rose Flower", img: "https://www.bigbasket.com/media/uploads/p/l/40232195_1-fresho-assorted-puja-flowers-greens-mix-to-decorate-for-festivals-puja.jpg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.bigbasket.com%2Fmedia%2Fuploads%2Fp%2Fl%2F40232195_1-fresho-assorted-puja-flowers-greens-mix-to-decorate-for-festivals-puja.jpg&name=Fresh%20Mix%20Rose%20Flower%20&weight=1pc%20&price=20" },
        { name: "Jasmine Fresh Flower", img: "https://www.pujanpujari.com/wp-content/uploads/2022/04/Natural-White-Chamanthi-Flowers-for-Pooja1-300x300.jpeg", url: "https://www.dailyy.in/product-details.html?img=https%3A%2F%2Fwww.pujanpujari.com%2Fwp-content%2Fuploads%2F2022%2F04%2FNatural-White-Chamanthi-Flowers-for-Pooja1-300x300.jpeg&name=Jasmine%20Fresh%20Flower%20%20&weight=100g&price=20" },
    
        { name: "Pure Pital Laxmi Ganesh Murti", img: "Image/bartan/61bU8k+MqnL._SL1500_.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2F61bU8k%2BMqnL._SL1500_.jpg&name=Pure%20Pital%20Laxmi%20Ganesh%20%20&weight=7CM&price=799" },
        { name: "Pure Brass Laxmi Ganesh Murti", img: "Image/bartan/laxmiganeh.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Flaxmiganeh.jpg&name=%20Pure%20Brass%20Laxmi%20Ganesh%20Decor%20&weight=1set&price=1049" },
        { name: "Laxmi Ganesh Small set", img: "Image/bartan/laxmigameshhh.jpg", url: "https://www.dailyy.in/product-details.html?img=Image%2Fbartan%2Flaxmigameshhh.jpg&name=%20Laxmi%20Ganesh%20Small%20set&weight=1set&price=399" },
      
    
    
    
      
    
    ];
    
    
    const searchBar = document.getElementById('search-bar');
    const searchDropdown = document.getElementById('search-dropdown');
    
    searchBar.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        searchDropdown.innerHTML = ''; // Clear previous results
        if (query) {
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
            filteredProducts.forEach(product => {
                const item = document.createElement('div');
                item.classList.add('dropdown-item');
                item.innerHTML = `
                    <img src="${product.img}" alt="${product.name}" class="item-img">
                    <span class="item-name">${product.name}</span>
                `;
                item.addEventListener('click', () => {
                    window.location.href = product.url;
                });
                searchDropdown.appendChild(item);
            });
            searchDropdown.style.display = 'block';
        } else {
            searchDropdown.style.display = 'none';
        }
    });
    
    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target) && !searchDropdown.contains(event.target)) {
            searchDropdown.style.display = 'none';
        }
    });