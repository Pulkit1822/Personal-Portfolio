let ran= Math.floor(Math.random()*20);

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [

        {
          name: "God Damn",
          artist: "Badshah, Hiten, and Karan Aujla",
          cover: "/Content/god.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265520/Badshah_X_Karan_Aujla_-_God_Damn_Official_Video___Hiten___Ek_THA_RAJA_320_iifhgj.mp3",
          favorited: false
        },
        {
          name: "4 Guna",
          artist: "MANIKK",
          cover: "/Content/4.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265405/4guna_xciwte.mp3",
          favorited: false
        },
        {
          name: "8 Asle",
          artist: "Chani Nattan, Prodgk, and Sukha",
          cover: "/Content/8.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265417/8_ASLE_-_SUKHA___GURLEZ_AKHTAR___CHANI_NATTAN___PRODGK_320_tywlou.mp3",
          favorited: false
        },
        {
          name: "100 Million",
          artist: "Divine and Karan Aujla",
          cover: "/Content/100.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265431/100_Million_-_DIVINE_KARAN_AUJLA___Official_Music_Video_320_ffdubo.mp3",
          favorited: false
        },
        {
          name: "Aaj Ke Baad",
          artist: "Manan Bhardwaj and Tulsi Kumar",
          cover: "/Content/aaj.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265439/Aaj_Ke_Baad_Full_Video_SatyaPrem_Ki_Katha___Kartik_Kiara___Manan_Tulsi_K__Sameer_Sajid_N_Namah_320_x3q6fu.mp3",
          favorited: false
        },
        {
          name: "Aankhein Khuli",
          artist: "Lata Mangeshkar, Udit Narayan, Udbhav, Manohar Shetty, Ishaan, Shweta Pandit, Sonali Bhatawdekar, Pritha Mazumdar and Shah Rukh Khan",
          cover: "/Content/aankein.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717411545/Aankhein_Khuli_Song___Mohabbatein___Shah_Rukh_Khan_Aishwarya_Rai___Lata_Mangeshkar_Udit_Narayan_320_1_hvhhzt.mp3",
          favorited: false
        },
        {
          name: "Alag Hai",
          artist: "Badshah, Fotty Seven, and RAGA",
          cover: "/Content/alag.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265481/Alag_Hai_320_zhfqcb.mp3",
          favorited: false
        },
        {
          name: "Alfaazo",
          artist: "Mitraz",
          cover: "/Content/alfaazo.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265510/Alfaazo_-_MITRAZ___Trending_Song_2023___Big_Bang_Music_320_niruwc.mp3",
          favorited: false
        },
        {
          name: "O Sanam",
          artist: "Lucky Ali",
          cover: "/Content/ali.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265910/O_Sanam_-_Sunoh___Lucky_Ali___Official_Video_320_ylag4v.mp3",
          favorited: false
        },
        {
          name: "Hua Mein",
          artist: "Pritam Chakraborty and Raghav Chaitanya",
          cover: "/Content/ani.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265448/ANIMAL__Hua_Main_Full_Video___Ranbir_Kapoor___Rashmika_M___Sandeep_V___Raghav_Manoj_M___Bhushan_K_320_thchs1.mp3",
          favorited: false
        },
        {
          name: "Apna Bana Le",
          artist: "Amitabh Bhattacharya, Arijit Singh, and Sachin Jigar",
          cover: "/Content/apna.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265470/Apna_Bana_Le_-_Bhediya___Varun_Dhawan_Kriti_Sanon__Sachin-Jigar_Arijit_Singh_Amitabh_Bhattacharya_320_ub9p8g.mp3",
          favorited: false
        },
        {
          name: "Aawara",
          artist: "KSHMR, King, and Zaeden",
          cover: "/Content/awara.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265839/KSHMR_King_Zaeden_-_Aawara_Official_Audio_320_s2dbyf.mp3",
          favorited: false
        },
        {
          name: "Bebe Bapu",
          artist: "Harsh Likhari",
          cover: "/Content/bebebapu.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265693/Harsh_Likhari_-_Bebe_Bapu___Vagish___Harf_Kambo_Official_Video_320_ci4voq.mp3",
          favorited: false
        },
        {
          name: "Besabriyaan",
          artist: " Amaal Mallik and Armaan Malik",
          cover: "/Content/besabriyan.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265555/BESABRIYAAN_Full_Video_Song___M._S._DHONI_-_THE_UNTOLD_STORY___Sushant_Singh_Rajput_320_jvqgnk.mp3",
          favorited: false
        },
        {
          name: "I Like Me Better",
          artist: "Lauv",
          cover: "/Content/better.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265828/Lauv_-_I_Like_Me_Better_Official_Audio_320_f2okb8.mp3",
          favorited: false
        },

        {
          name: "Buyer Beware",
          artist: "Post Malone",
          cover: "/Content/buyerbeware.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265916/Post_Malone_-_Buyer_Beware_Official_Audio_320_swxl6y.mp3",
          favorited: false
        },
        {
          name: "Character Dheela 2.0",
          artist: "Neeraj Shridhar and Style Bai",
          cover: "/Content/cd.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265548/Character_Dheela_2.0_Audio___Shehzada___Kartik_Kriti___Neeraj_Pritam___Rohit_D___Bhushan_Kumar_320_ytz8xy.mp3",
          favorited: false
        },
        {
          name: "Congratulations",
          artist: "Post Malone",
          cover: "/Content/cg.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265577/Congratulations_320_cobguy.mp3",
          favorited: false
        },
        {
          name: "Check it out",
          artist: "Paradox and Parmish Verma",
          cover: "/Content/chack.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265892/Parmish_Verma_Ft._Paradox_-_Check_It_Out_Official_Music_Video_320_adosyw.mp3",
          favorited: false
        },
        {
          name: "Chaleya",
          artist: "Arijit Singh and Shilpa Rao",
          cover: "/Content/chaleya.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717361957/Jawan__Chaleya_Audio___Shah_Rukh_Khan___Nayanthara___Atlee___Anirudh___Arijit_S_Shilpa_R___Kumaar_320_xj7jwm.mp3",
          favorited: false
        },
        {
          name: "Something Just Like This",
          artist: "Coldplay and The Chainsmokers",
          cover: "/Content/chan.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717266005/The_Chainsmokers_Coldplay_-_Something_Just_Like_This_Audio_320_ab1rxs.mp3",
          favorited: false
        },
        {
          name: "Choo Lo",
          artist: "The Local Train",
          cover: "/Content/chho.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717266031/The_Local_Train_-_Aalas_Ka_Pedh_-_Choo_Lo_Official_Audio_320_c3tttk.mp3",
          favorited: false
        },
        {
          name: "Circles",
          artist: "Post Malone",
          cover: "/Content/circles.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265942/Post_Malone_-_Circles_Official_Audio_320_xtyccj.mp3",
          favorited: false
        },
        {
          name: "Class",
          artist: "Badshah, Diesby, and Nikhita Gandhi",
          cover: "/Content/class.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265570/Class_From__Showtime__320_vhyant.mp3",
          favorited: false
        },
        {
          name: "Crown",
          artist: "King and Natania Lalwani",
          cover: "/Content/crown.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265589/CROWN___Introduction___New_Life_Album___King_320_ukyzg6.mp3",
          favorited: false
        },
        {
          name: "Daaku",
          artist: "Badshah, Hiten, and Sharvi Yadav",
          cover: "/Content/daaku.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265506/Badshah_-_Daaku_Official_Music_Video___Sharvi_Yadav___Hiten___EK_THA_RAJA_320_gdd4xx.mp3",
          favorited: false
        },
        {
          name: "Perfect",
          artist: "Ed Sheeran",
          cover: "/Content/divide.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265652/Ed_Sheeran_-_Perfect_Official_Audio_320_ud3mb5.mp3",
          favorited: false
        },
        {
          name: "Dooba Dooba",
          artist: "Mohit Chauhan, Kem Trivedi and Atul Mittal",
          cover: "/Content/dooba.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265643/Dooba_Dooba_-_Silk_Route___Official_Hindi_Pop_Song_320_wjvx6o.mp3",
          favorited: false
        },
        {
          name: "Duur se",
          artist: "Hassan, Roshaan and Amna Riaz",
          cover: "/Content/duur.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265718/Hassan_Roshaan_-_Duur_Se_ft_Amna_Riaz____Official_Lyrics_Video____320_asg4dk.mp3",
          favorited: false
        },
        {
          name: "Beautiful People", 
          artist: "Ed Sheeran and Khalid",
          cover: "/Content/ed.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265628/Ed_Sheeran_-_Beautiful_People_feat._Khalid_Official_Lyric_Video_320_snrc7p.mp3",
          favorited: false
        },
        {
          name: "How Do I Say Goodbye",
          artist: "Dean Lewis",
          cover: "/Content/father.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265591/Dean_Lewis_-_How_Do_I_Say_Goodbye_Orchestral_-_Official_Audio_320_d1uyyv.mp3",
          favorited: false
        },
        {
          name: "Gangster",
          artist: "Karma, King, Deep Kalsi and Ryan summer",
          cover: "/Content/gangster.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265648/GANGSTER_OFFICIAL_VIDEO_-_KARMA_FEAT._KING___PROD._BY_DEEP_KALSI___M.Y.P.___KALAMKAAR_320_xbrslp.mp3",
          favorited: false
        },
        {
          name: "Main Koi Aisa Geet Gaoon",
          artist: "Abhijeet Bhattacharya and Alka Yagnik",
          cover: "/Content/geet.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265903/Main_Koi_Aisa_Geet_Gaoon___Yes_Boss___Jatin_Lalit___Abhijeet___High_Quality___Remastered_320_f82i0x.mp3",
          favorited: false
        },
        {
          name: "Hola Amigo",
          artist: " Seedhe Maut, Umair and KRSNA",
          cover: "/Content/hola.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265830/KR_NA_ft._Seedhe_Maut_-_Hola_Amigo___Official_Music_Video_320_b816aj.mp3",
          favorited: false
        },
        {
          name: "I don't care",
          artist: "Ed Sheeran and Justin Bieber",
          cover: "/Content/idc.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265645/Ed_Sheeran_Justin_Bieber_I_Don_t_Care_Official_Audio_320_stxrvv.mp3",
          favorited: false
        },
        {
          name: "I had some help",
          artist: "Post Malone and Morgan Walle",
          cover: "/Content/ihsh.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265685/I_Had_Some_Help_320_lojyc1.mp3",
          favorited: false
        },
        {
          name: "Ilzaam",
          artist: "Arjun Kanungo and King",
          cover: "/Content/ilzam.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265733/ILZAAM_-_ARJUN_KING___CARLA_DENNIS___From_the_album_INDUSTRY___OFFICIAL_MUSIC_VIDEO_320_rfjiap.mp3",
          favorited: false
        },
        {
          name: "Infinity",
          artist: "Jaymes Young",
          cover: "/Content/infinity.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265773/Jaymes_Young_-_Infinity_Official_Audio_320_d0md5q.mp3",
          favorited: false
        },
        {
          name: "Main Hoon Jhoom Jhoom Jhumroo",
          artist: "Kishore Kumar",
          cover: "/Content/jhumroo.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265829/Main_Hoon_Jhoom_Jhoom_Jhumroo_-_Kishore_Kumar_-_Madhubala_-_Jhumroo_Song_-_Fun_Song_320_x5hqyt.mp3",
          favorited: false
        },
        {
          name: "Koi Kahe Kehta Rahe",
          artist: "KK, Shaan, and Shankar Mahadevan",
          cover: "/Content/kehta.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265840/Koi_Kahe_Kehta_Rahe_Lyrical_Video___Dil_Chahta_Hai___Aamir_Khan_Akshaye_Khanna_Saif_Ali_Khan_320_uuj30c.mp3",
          favorited: false
        },
        {
          name: "Dil Kyun Yeh Mera",
          artist: "KK",
          cover: "/Content/kites.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265645/Dil_Kyun_Yeh_Mera_Shor_Kare_-_KK___Kites___Hrithik_Roshan_Rajesh_Roshan_320_lsltfs.mp3",
          favorited: false
        },
        {
          name: "Woh Kisna Hai",
          artist: "Ayesha I. Darbar, M Shylaja, and Sukhwinder Singh",
          cover: "/Content/krishna.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717266070/Woh_Kisna_Hai___Krishna_Janmashtami_Special___Sukhwinder_Singh___Kisna_320_kjtcl9.mp3",
          favorited: false
        },
        {
          name: "Kya karoon?",
          artist: "Zaeden",
          cover: "/Content/kya.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717266064/Zaeden_-_kya_karoon__320_aiemxs.mp3",
          favorited: false
        },
        {
          name: "Lamhey",
          artist: "Anubha Baj",
          cover: "/Content/lamhe.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265442/Anubha_Bajaj_-_Lamhey_Lyrics_320_ivlxt3.mp3",
          favorited: false
        },
        {
          name: "Legends",
          artist: "King",
          cover: "/Content/legends.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265776/KING_-_Legends_Lyrics___New_Life_320_xixxrl.mp3",
          favorited: false
        },
        {
          name: "Light Switch",
          artist: "Charlie Puth",
          cover: "/Content/light.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265560/Charlie_Puth_-_Light_Switch_Official_Audio_320_vqklve.mp3",
          favorited: false
        },
        {
          name: "All The Love That I Ever Needed",
          artist: "James Blunt",
          cover: "/Content/love.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265702/James_Blunt_-_All_The_Love_I_Ever_Needed_Official_Audio_320_qnbyyq.mp3",
          favorited: false
        },
        {
          name: "Let There Be Love",
          artist: "Ananya, King and Rahul Sathu",
          cover: "/Content/ltbl.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265512/Ananya_ft._King_RahulSathuOfficial_-_Let_There_Be_Love_Remix_320_g5yk23.mp3",
          favorited: false
        },
        {
          name: "Maan Meri Jaan",
          artist: "King",
          cover: "/Content/maan.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265782/King_-_Maan_Meri_Jaan_Lyrics_320_wljxje.mp3",
          favorited: false
        },
        {
          name: "Me & Me",
          artist: "King",
          cover: "/Content/menme.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717396946/Me_Me_320_zxvbxg.mp3",
          favorited: false
        },
        {
          name: "Tum jo milo",
          artist: "Abhijeet Shrivastava and Pritam Chakraborty",
          cover: "/Content/mile.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717266023/Tum_Jo_Milo___Freddy___Kartik_Aaryan_Alaya_F___Pritam___Abhijeet_Srivastava___Irshad_Kamil_320_je7u1o.mp3",
          favorited: false
        },
        {
          name: "Akhiyaan",
          artist: "Mitraz",
          cover: "/Content/mitraz.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265873/MITRAZ_-_Akhiyaan_Official_Audio_320_rimtvz.mp3",
          favorited: false
        },
        {
          name: "Makin Moves",
          artist: "Karma and Vivek Arora",
          cover: "/Content/mm.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265854/MAKIN_MOVES_320_xjhr4p.mp3",
          favorited: false
        },
        {
          name: "Mourning",
          artist: "Post Malone",
          cover: "/Content/mourning.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265921/Post_Malone_-_Mourning_Visualizer_320_h3iufr.mp3",
          favorited: false
        },
        {
          name: "Mera Pehla Pehla Pyaar",
          artist: "KK and The Vipin Mishra Project",
          cover: "/Content/mp3.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265886/Mera_Pehla_Pehla_Pyar_720p_HD_HQ_Official_320_dyzo77.mp3",
          favorited: false
        },
        {
          name: "Chhore Ncr Aale",
          artist: "MC SQUARE and Paradox",
          cover: "/Content/ncr.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265568/Chhore_Ncr_Aale_320_c8xvti.mp3",
          favorited: false
        },
        {
          name: "Ishq Di Baajiyaan",
          artist: "Diljit Dosanjh and Shankar Ehsaan Loy",
          cover: "/Content/noor.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265728/Ishq_Di_Baajiyaan_Lyric_Video_-_Soorma_Dilhit_Dosanjh_Taapsee_Shankar_Ehsaan_Loy_Gulzar_320_ydcu6g.mp3",
          favorited: false
        },
        {
          name: "Nothing Lasts",
          artist: "Divine and Karan Aujla",
          cover: "/Content/nothing.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265892/NOTHING_LASTS_-_KARAN_AUJLA_DIVINE___Official_Music_Video_320_fpti84.mp3",
          favorited: false
        },
        {
          name: "On my way",
          artist: " Alan Walker, Farruko, and Sabrina Carpenter",
          cover: "/Content/omw.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265487/Alan_Walker_Sabrina_Carpenter_Farruko_-_On_My_Way_Lyrics_320_e9vdbq.mp3",
          favorited: false
        },
        {
          name: "Papa Meri Jaan",
          artist: "Sonu Nigam, Raj Shekhar, Harshavardhan Rameshwar, Davy Suresh Kumar and Jaganmohan",
          cover: "/Content/papa.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265468/ANIMAL_PAPA_MERI_JAAN_Audio__Ranbir_Kapoor_Rashmika_Anil_K_Bobby_D_Sandeep_V_Sonu_Nigam_Bhushan_K_320_przppy.mp3",
          favorited: false
        },
        {
          name: "Peaches",
          artist: "Diljit Dosanjh and Anne Marie",
          cover: "/Content/peaches.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717400713/Peaches_Lyric_Video___Diljit_Dosanjh_Feat._Anne-Marie___Intense_Raj_Ranjodh___Drive_Thru_320_crrnbs.mp3",
          favorited: false
        },
        {
          name: "Players",
          artist: "Badshah and Karan Aujla",
          cover: "/Content/players.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265925/Players_Lyrics_-_Badshah_ft._Karan_Aujla_Devika_Badyal___3_00_AM_Sessions___LyricsStore_04__LS04_320_b1ubrg.mp3",
          favorited: false
        },
        {
          name: "Saint Tropez",
          artist: "Post Malone",
          cover: "/Content/pm.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265931/Post_Malone_-_Saint-Tropez_Audio_320_elorff.mp3",
          favorited: false
        },
        {
          name: "Raataan Lambiyan",
          artist: "Asees Kaur, Jubin Nautiyal, and Tanishk Bagchi",
          cover: "/Content/raatan.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265970/Raataan_Lambiyan_-_Lyric_Video__Shershaah_Sidharth_Kiara_Tanishk_B._Jubin_Asees_320_kkog45.mp3",
          favorited: false
        },
        {
          name: "Rait Zara Si",
          artist: "Shashaa Tirupati, Arijit Singh, Irshad Kamil, and A. R. Rahman",
          cover: "/Content/rait.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717399225/Rait_Zara_Si_Audio___Atrangi_Re__ARRahman_Akshay_K_Sara_A_K_Dhanush_Arijit_S_Shashaa_T_Irshad_K_320_t7vlvk.mp3",
          favorited: false
        },
        {
          name: "Ram Ram",
          artist: "MC Square",
          cover: "/Content/ramram.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265978/RAM_RAM___MC_Square___MTV_Hustle_2.0_320_o3cfub.mp3",
          favorited: false
        },
        {
          name: "Safar",
          artist: "Bhuvan Bam",
          cover: "/Content/safar.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265983/Safar_-_Bhuvan_Bam___Lyrical_Audio_320_uxvked.mp3",
          favorited: false
        },
        {
          name: "Sarkaare",
          artist: "King",
          cover: "/Content/sarkaare.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265978/Sarkaare_-_King_Lyrics___New_Life___LS04_320_bm3ug8.mp3",
          favorited: false
        },
        {
          name: "Sunflower 🌻",
          artist: "Post Malone and Swae Lee",
          cover: "/Content/sf.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265965/Post_Malone_Swae_Lee_-_Sunflower_Spider-Man__Into_the_Spider-Verse_320_txd8lm.mp3",
          favorited: false
        },
        {
          name: "Soulmate",
          artist: "Arijit Singh and Badshah",
          cover: "/Content/soul.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265537/Badshah_X_Arijit_Singh_-_Soulmate_Official_Lyric_Video___EK_THA_RAJA_320_av4hma.mp3",
          favorited: false
        },
        {
          name: "Stay",
          artist: "Justin Bieber and The Kid LAROI",
          cover: "/Content/stay.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717266006/The_Kid_LAROI_Justin_Bieber_-_Stay_Official_Audio_320_okbdsz.mp3",
          favorited: false
        },
        {
          name: "Sucker Punch",
          artist: "Atrey",
          cover: "/Content/suckerpunch.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717266029/Sucker_Punch_320_tkzdp5.mp3",
          favorited: false
        },
        {
          name: "Tu Aake Dekhle",
          artist: "King",
          cover: "/Content/tad.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265827/King_-_Tu_Aake_Dekhle___The_Carnival___The_Last_Ride___Prod._by_Shahbeatz___Latest_Hit_Songs_2020_320_gtbouv.mp3",
          favorited: false
        },
        {
          name: "Zinda Banda",
          artist: "Anirudh Ravichander",
          cover: "/Content/zinda.png",
          source: "https://res.cloudinary.com/dh7l9mnkn/video/upload/v1717265778/Jawan__Zinda_Banda_Audio__Shah_Rukh_Khan__Atlee__Anirudh__Nayanthara__Vijay_Sethupathi__Deepika_320_uzvnpc.mp3",
          favorited: false
        },
      ],

      currentTrack: null,
      currentTrackIndex: ran,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },


    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },


    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      this.play()
    },



    shuffleTrack(){
      this.transitionName = "scale-out";
      this.isShowCover = false;
      this.currentTrackIndex=Math.floor(Math.random()*this.tracks.length);
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      this.play()
    },


    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      this.play()

    },


    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 500);
    },



    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },



  
  created() {
    let vm = this;
    this.currentTrack = this.tracks[ran];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };
  }
});
