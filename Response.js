export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - test",
        totalResults: "9",
        searchTerms: "test",
        count: 9,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "fe71515c04e295a71",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.580625,
    formattedSearchTime: "0.58",
    totalResults: "9",
    formattedTotalResults: "9",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Android Beta Program",
      htmlTitle: "Android Beta Program",
      link: "https://www.google.com/android/beta",
      displayLink: "www.google.com",
      snippet:
        "Android Beta for Pixel offers you a simple way to try pre-release versions of Android, and test drive our new features. The feedback you provide will help us ...",
      htmlSnippet:
        "Android Beta for Pixel offers you a simple way to try pre-release versions of Android, and \u003cb\u003etest\u003c/b\u003e drive our new features. The feedback you provide will help us&nbsp;...",
      cacheId: "AUFDLyB7DUsJ",
      formattedUrl: "https://www.google.com/android/beta",
      htmlFormattedUrl: "https://www.google.com/android/beta",
      pagemap: {
        metatags: [
          {
            "application-name": "Android Beta Program",
            referrer: "origin",
            "apple-mobile-web-app-status-bar-style": "black",
            "msapplication-tap-highlight": "no",
            viewport: "width=device-width, initial-scale=1.0",
            "apple-mobile-web-app-capable": "yes",
            "apple-mobile-web-app-title": "Android Beta Program",
            "mobile-web-app-capable": "yes",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "How Google's Algorithm is Focused on Its Users - Google Search",
      htmlTitle:
        "How Google&#39;s Algorithm is Focused on Its Users - Google Search",
      link: "https://www.google.com/search/howsearchworks/mission/users/",
      displayLink: "www.google.com",
      snippet:
        "Rigorous testing · Our goal is always to provide you the most useful and relevant information. Any changes we make to Search are always to improve the ...",
      htmlSnippet:
        "Rigorous \u003cb\u003etesting\u003c/b\u003e &middot; Our goal is always to provide you the most useful and relevant information. Any changes we make to Search are always to improve the&nbsp;...",
      cacheId: "ObxN5sVIizUJ",
      formattedUrl:
        "https://www.google.com/search/howsearchworks/mission/users/",
      htmlFormattedUrl:
        "https://www.google.com/search/howsearchworks/mission/users/",
      pagemap: {
        metatags: [
          {
            referrer: "no-referrer",
            "twitter:title":
              "How Google's Algorithm is Focused on Its Users - Google Search",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "Learn how changes to Google's algorithm are tested with Google search experiments to ensure that we continue to provide the most useful results, and how ads help us keep Google Search free.",
            "og:title":
              "How Google's Algorithm is Focused on Its Users - Google Search",
            "og:description":
              "Learn how changes to Google's algorithm are tested with Google search experiments to ensure that we continue to provide the most useful results, and how ads help us keep Google Search free.",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google",
      htmlTitle: "Google",
      link: "https://www.google.com/",
      displayLink: "www.google.com",
      snippet:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
      htmlSnippet:
        "Search the world&#39;s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...",
      cacheId: "y14FcUQOGl4J",
      formattedUrl: "https://www.google.com/",
      htmlFormattedUrl: "https://www.google.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc",
            width: "320",
            height: "112",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            viewport: "width=device-width,minimum-scale=1.0",
            google: "notranslate",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "this simple test",
      htmlTitle: "this simple \u003cb\u003etest\u003c/b\u003e",
      link: "https://www.google.com/liftware/files/test.pdf",
      displayLink: "www.google.com",
      snippet:
        "Print out this page (available at www.liftware.com/test) and take a seat. 2. Hold a pen in the hand you use to eat. 3. Start with circle A and hover the tip of the pen ...",
      htmlSnippet:
        "Print out this page (available at www.liftware.com/\u003cb\u003etest\u003c/b\u003e) and take a seat. 2. Hold a pen in the hand you use to eat. 3. Start with circle A and hover the tip of the pen&nbsp;...",
      cacheId: "Ikv2XyX9IscJ",
      formattedUrl: "https://www.google.com/liftware/files/test.pdf",
      htmlFormattedUrl:
        "https://www.google.com/liftware/files/\u003cb\u003etest\u003c/b\u003e.pdf",
      pagemap: {
        metatags: [
          {
            moddate: "D:20160419160330-07'00'",
            creationdate: "D:20160419160330-07'00'",
            creator: "Adobe Illustrator CC 2015 (Windows)",
            producer: "Adobe PDF library 15.00",
            title: "990-01378-00 RevB self test",
          },
        ],
      },
      mime: "application/pdf",
      fileFormat: "PDF/Adobe Acrobat",
    },
    {
      kind: "customsearch#result",
      title: "Test your app or game : Google Play Academy",
      htmlTitle:
        "\u003cb\u003eTest\u003c/b\u003e your app or game : Google Play Academy",
      link: "https://www.google.com/appserve/mkt/p/ABMBUQMz9UJ9SNwbimvTDICavSr6uRmNmmW6gHAK7a-QmlYya2Mbt_lFxqvK4kFbLXA3pH9tftLLb1K8g5FYpzRnjoR4zy21cLhVSW2RZCT6F_S1Y6ubDg",
      displayLink: "www.google.com",
      snippet:
        "Testing can be a valuable step for your app, whether you have a production app ... You'll learn about the different test methodologies, which test is right for you, ...",
      htmlSnippet:
        "\u003cb\u003eTesting\u003c/b\u003e can be a valuable step for your app, whether you have a production app ... You&#39;ll learn about the different \u003cb\u003etest\u003c/b\u003e methodologies, which \u003cb\u003etest\u003c/b\u003e is right for you,&nbsp;...",
      cacheId: "VldyomwZmDcJ",
      formattedUrl:
        "https://www.google.com/.../ ABMBUQMz9UJ9SNwbimvTDICavSr6uRmNmmW6gHAK7a-QmlYya2M...",
      htmlFormattedUrl:
        "https://www.google.com/.../ ABMBUQMz9UJ9SNwbimvTDICavSr6uRmNmmW6gHAK7a-QmlYya2M...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-dlEs6RT1SXBNAfMZGZmFRFR9oF6dYsPieF1ciLpzmTCjiIWq6hXmRg",
            width: "450",
            height: "70",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://storage.googleapis.com/exceedlms-external-uploads-production/uploads/organizations/branding_logos/52/full/gpa-fulllock.png",
            "twitter:card": "summary",
            "og:site_name": "Google Play Academy",
            "og:title": "Test your app or game",
            "csrf-param": "authenticity_token",
            "og:article:tag": "Learn about improving app quality",
            "apple-mobile-web-app-status-bar-style": "white",
            viewport: "width=device-width, initial-scale=1.0",
            "exceed:embeddable": "false",
            "apple-mobile-web-app-capable": "yes",
            "og:author": "Play Academy",
            "csrf-token":
              "cviuvZGZRJ6Uix8T6G/119Ve+nla9M3CzFEqjbsEyfohRwu5jSnu6ZSOJn7MSCymKSv93Kc+DbKQFJ2HxLsxNw==",
            "og:locale": "en",
            "exceed:course_type": "CourseCurriculum",
            "og:url":
              "https://playacademy.exceedlms.com/student/path/4915-test-your-app-or-game",
          },
        ],
        cse_image: [
          {
            src: "https://storage.googleapis.com/exceedlms-external-uploads-production/uploads/organizations/branding_logos/52/full/gpa-fulllock.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Cross-Site Scripting – Application Security – Google",
      htmlTitle: "Cross-Site Scripting – Application Security – Google",
      link: "https://www.google.com/about/appsecurity/learning/xss/",
      displayLink: "www.google.com",
      snippet:
        'How can I test for XSS? Manual testing ("black-box testing"); Code review ("white- box testing"); Unit tests; Web application security scanners; Which testing ...',
      htmlSnippet:
        "How can I \u003cb\u003etest\u003c/b\u003e for XSS? Manual \u003cb\u003etesting\u003c/b\u003e (&quot;black-box \u003cb\u003etesting\u003c/b\u003e&quot;); Code review (&quot;white- box \u003cb\u003etesting\u003c/b\u003e&quot;); Unit \u003cb\u003etests\u003c/b\u003e; Web application security scanners; Which \u003cb\u003etesting\u003c/b\u003e&nbsp;...",
      cacheId: "dOZqrO41xLQJ",
      formattedUrl: "https://www.google.com/about/appsecurity/learning/xss/",
      htmlFormattedUrl:
        "https://www.google.com/about/appsecurity/learning/xss/",
      pagemap: {
        metatags: [
          {
            viewport: "initial-scale=1, minimum-scale=1, width=device-width",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "testing tool in Google Search Console",
      htmlTitle:
        "\u003cb\u003etesting\u003c/b\u003e tool in Google Search Console",
      link: "https://www.google.com/webmasters/tools/robots-testing-tool",
      displayLink: "www.google.com",
      snippet:
        "Use Search Console to monitor Google Search results data for your properties.",
      htmlSnippet:
        "Use Search Console to monitor Google Search results data for your properties.",
      formattedUrl:
        "https://www.google.com/webmasters/tools/robots-testing-tool",
      htmlFormattedUrl:
        "https://www.google.com/webmasters/tools/robots-\u003cb\u003etesting\u003c/b\u003e-tool",
      pagemap: {
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1",
            "format-detection": "telephone=no",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Pre-launch testing for mobile games: tools and best practices on ...",
      htmlTitle:
        "Pre-launch \u003cb\u003etesting\u003c/b\u003e for mobile games: tools and best practices on ...",
      link: "https://www.google.com/appserve/mkt/proof/p/AD-FnExC71sQkFDNoRrIfoNDZMAA8UWvpSe5n87Dpb-LEf8z0f542VvJ05CaE8s_O3SYMhctapLfgr3E8dbH9qbAGlFAEWF5acQJHxsRHRomks5arcPTRtaBbZS1ejGOvoFD6Qo?disableTrackingProofPage=true",
      displayLink: "www.google.com",
      snippet:
        "Oct 9, 2020 ... Internal testing. Whether you're running your game by a few friends and family or giving access to key internal staff, Google Play allows you to roll ...",
      htmlSnippet:
        "Oct 9, 2020 \u003cb\u003e...\u003c/b\u003e Internal \u003cb\u003etesting\u003c/b\u003e. Whether you&#39;re running your game by a few friends and family or giving access to key internal staff, Google Play allows you to roll&nbsp;...",
      cacheId: "lmP-LCOnEvYJ",
      formattedUrl:
        "https://www.google.com/.../AD- FnExC71sQkFDNoRrIfoNDZMAA8UWvpSe5n87Dpb- ...",
      htmlFormattedUrl:
        "https://www.google.com/.../AD- FnExC71sQkFDNoRrIfoNDZMAA8UWvpSe5n87Dpb- ...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQSKV1-KT4lKU3KhZ6jYGc3fGi2sjcpEJZFovvn6SPE8EEYjhl_eOP6A",
            width: "412",
            height: "122",
          },
        ],
        metatags: [
          {
            "twitter:app:url:iphone": "medium://p/96d0ef3c4d51",
            "og:image":
              "https://miro.medium.com/max/1200/1*RIkFEBkf-kKxQGAY_JJXXQ.png",
            "theme-color": "#000000",
            "article:published_time": "2020-10-09T17:05:03.754Z",
            "twitter:card": "summary_large_image",
            "og:site_name": "Medium",
            "al:android:package": "com.medium.reader",
            "twitter:label1": "Reading time",
            "twitter:app:id:iphone": "828256236",
            title:
              "Pre-launch testing for mobile games: tools and best practices on Google Play | by Francesco Crovetto | Google Play Apps & Games | Medium",
            "al:ios:url": "medium://p/96d0ef3c4d51",
            "og:description": "A guide to Google Play’s pre-launch tools",
            "al:ios:app_store_id": "828256236",
            "twitter:data1": "9 min read",
            "twitter:site": "@googleplaydev",
            "og:type": "article",
            "twitter:title":
              "Pre-launch testing for mobile games: tools and best practices on Google Play",
            "al:ios:app_name": "Medium",
            author: "Francesco Crovetto",
            "og:title":
              "Pre-launch testing for mobile games: tools and best practices on Google Play",
            "al:web:url":
              "https://medium.com/googleplaydev/test-pre-launch-96d0ef3c4d51",
            "article:author": "https://medium.com/@fcrovetto",
            "twitter:image:src":
              "https://miro.medium.com/max/1200/1*RIkFEBkf-kKxQGAY_JJXXQ.png",
            "al:android:url": "medium://p/96d0ef3c4d51",
            referrer: "unsafe-url",
            "fb:app_id": "542599432471018",
            viewport: "width=device-width,minimum-scale=1,initial-scale=1",
            "twitter:description": "A guide to Google Play’s pre-launch tools",
            "og:url":
              "https://medium.com/googleplaydev/test-pre-launch-96d0ef3c4d51",
            "twitter:app:name:iphone": "Medium",
            "al:android:app_name": "Medium",
          },
        ],
        cse_image: [
          {
            src: "https://miro.medium.com/max/1200/1*RIkFEBkf-kKxQGAY_JJXXQ.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Waymo",
      htmlTitle: "Waymo",
      link: "https://www.google.com/selfdrivingcar/",
      displayLink: "www.google.com",
      snippet:
        "Waymo—formerly the Google self-driving car project—stands for a new way forward in mobility. Our mission is to make it safe and easy for people and things to ...",
      htmlSnippet:
        "Waymo—formerly the Google self-driving car project—stands for a new way forward in mobility. Our mission is to make it safe and easy for people and things to&nbsp;...",
      cacheId: "jH6OCbvTOPQJ",
      formattedUrl: "https://www.google.com/selfdrivingcar/",
      htmlFormattedUrl: "https://www.google.com/selfdrivingcar/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDe3q_ecCo3327WH9qZ7L8ws21NE7bS3jFwMQ03gCBs4uCnT6WVePFQPA",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image": "https://waymo.com/v2/static/images/waymo_banner.jpg",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Waymo",
            "og:site_name": "Waymo",
            "og:title": "Waymo",
            "og:description":
              "Waymo—formerly the Google self-driving car project—stands for a new way forward in mobility. Our mission is to make it safe and easy for people and things to move around.",
            "twitter:creator": "@Waymo",
            "og:image:secure_url":
              "https://waymo.com/v2/static/images/waymo_banner.jpg",
            "twitter:image":
              "https://waymo.com/v2/static/images/waymo_banner.jpg",
            referrer: "no-referrer",
            "twitter:site": "@Waymo",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "Waymo—formerly the Google self-driving car project—stands for a new way forward in mobility. Our mission is to make it safe and easy for people and things to move around.",
            "og:locale": "en",
            "og:url": "https://waymo.com/",
          },
        ],
        cse_image: [
          {
            src: "https://waymo.com/v2/static/images/waymo_banner.jpg",
          },
        ],
      },
    },
  ],
};
