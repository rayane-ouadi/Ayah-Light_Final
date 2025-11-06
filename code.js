document.addEventListener('DOMContentLoaded', function () {
  const btnGenAyah = document.getElementById('ayahGenerator');
  const ayahCont = document.getElementById('ayah');

  const ayahs = [
    
    { ar: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
      en: "O believers! Seek comfort in patience and prayer. Allah is truly with those who are patient.",
      raqm: "Surah Al-Baqarah 2:153",
    },

    { ar: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ",
      en: "Say, “O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.”",
      raqm: "Surah Az-Zumar 39:53",
    },

    { ar: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      en: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
      raqm: "Surah Ash-Sharh 94:5–6",
    },

    { ar: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا ۚ وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
      en: "Say, “Never will we be struck except by what Allah has decreed for us; He is our Protector.” And upon Allah let the believers rely.",
      raqm: "Surah At-Tawbah 9:51",
    },

    { ar: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
      en: "Allah does not burden a soul beyond that it can bear.",
      raqm: "Surah Al-Baqarah 2:286",
    },

    { ar: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ",
      en: "Indeed, the patient will be given their reward without account.",
      raqm: "Surah Az-Zumar 39:10",
    },

    { ar: "فَإِذَا فَرَغْتَ فَانصَبْ • وَإِلَىٰ رَبِّكَ فَارْغَبْ",
      en: "So when you have finished [your duties], then stand up [for worship]. And to your Lord direct [your] longing.",
      raqm: "Surah Al-Inshirah 94:7–8",
    },

    { ar: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
      en: "Do not despair of the mercy of Allah. Indeed, Allah forgives all sins.",
      raqm: "Surah Az-Zumar 39:53",
    },

    { ar: "لَّهُۥ مُلْكُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ وَإِلَى ٱللَّهِ تُرْجَعُ ٱلْأُمُورُ ٥",
      en: "To Him belongs the kingdom of the heavens and the earth. And to Allah all matters are returned.",
      raqm: "Surah Al-Hadid 57:5",
    },

    { ar: "وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ",
      en: "And that there is not for man except that [good] for which he strives.",
      raqm: "Surah An-Najm 53:39",
    },

    { ar: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
      en: "So whoever does an atom’s weight of good will see it.",
      raqm: "Surah Az-Zalzalah 99:7",
    },

    { ar: "وَمَكَرُوا وَمَكَرَ اللَّهُ ۖ وَاللَّهُ خَيْرُ الْمَاكِرِينَ",
      en: "They plan, and Allah plans. And Allah is the best of planners.",
      raqm: "Surah Aal-Imran 3:54",
    },

    { ar: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      en: "Unquestionably, by the remembrance of Allah hearts are assured.",
      raqm: "Surah Ar-Ra’d 13:28",
    },

    { ar: "مَن جَآءَ بِٱلْحَسَنَةِ فَلَهُۥ خَيْرٌۭ مِّنْهَا ۖ وَمَن جَآءَ بِٱلسَّيِّئَةِ فَلَا يُجْزَى ٱلَّذِينَ عَمِلُوا۟ ٱلسَّيِّـَٔاتِ إِلَّا مَا كَانُوا۟ يَعْمَلُونَ ٨٤",
      en: "Whoever comes with a good deed will be rewarded with what is better. And whoever comes with an evil deed, then the evildoers will only be rewarded for what they used to do.",
      raqm: "Surah Al-Qasas 28:84",
    },

    { ar: "وَٱلَّذِينَ جَـٰهَدُوا۟ فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ ٱللَّهَ لَمَعَ ٱلْمُحْسِنِينَ ٦٩",
      en: "As for those who struggle in Our cause, We will surely guide them along Our Way. And Allah is certainly with the good-doers.",
      raqm: "Surah Al-Ankabut 29:69",
    },

    { ar: "وَاصْبِرُوا ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
      en: "And be patient. Indeed, Allah is with the patient.",
      raqm: "Surah Al-Anfal 8:46",
    },
  ];

  const welcomeayah = document.getElementById('welcome-ayah');

  btnGenAyah.addEventListener('click', function () {
    welcomeayah.style.display = "none";
    const randomAyah = ayahs[Math.floor(Math.random() * ayahs.length)];
    ayahCont.innerHTML = `
      <div style="font-size: 24px; margin-bottom: 10px; font-family: quranfont;">${randomAyah.ar}</div>
      <div style="font-size: 18px; color: gray; margin-top: -10px; font-family: mainfont;">(${randomAyah.en})</div>
      <div style="font-size: 18px; color: white; margin-top: 10px;">(${randomAyah.raqm})</div>
    `;
  });
});


