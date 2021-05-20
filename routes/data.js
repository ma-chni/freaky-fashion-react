var express = require("express");
var router = express.Router();
router.get("/products", function (req, res) {
  const products = [
    {
      id: "1",
      image:
        "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B1600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/01/39/0139b5eb436c9333c8c89555225bc564df971f0c.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D",
      name: "Bruna joggers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
      price: "1500",
      articlenumber: "ABC-123",
      category: "Byxor",
    },
    {
      id: "2",
      image:
        "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B1600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B/ec/40/ec40cb2f510114b7878c1f02d2e435c506968e03.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D",
      name: "Vita fila sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
      price: "2000",
      articlenumber: "EFG-456",
      category: "REA",
    },
    {
      id: "3",
      image:
        "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B1600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B/30/53/3053f47ddfa9abb9c72ea8db5e36023f1818341d.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D",
      name: "Grön skjorta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
      price: "1000",
      articlenumber: "QSF-521",
      category: "Tröjor",
    },
    {
      id: "4",
      image:
        "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B1600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/7b/70/7b702a3d38f1ab4cd50cb0d9840573198d190bf6.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D",
      name: "Ljusblåa jeans",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
      price: "5000",
      articlenumber: "IGC-421",
      category: "Byxor",
    },
    {
      id: "5",
      image:
        "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B1600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/ea/4d/ea4d4959a9b8b0107057df1efec28f1e6b836dd9.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D",
      name: "Vit klänning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
      price: "10000",
      articlenumber: "AXC-490",
      category: "Klänningar",
    },
    {
      id: "6",
      image:
        "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B1600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/2a/08/2a087c02fb2b3bce2c3aec1dca47645a232435d0.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D",
      name: "Bucket hat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
      price: "4000",
      articlenumber: "QET-267",
      category: "REA",
    },
    {
      id: "7",
      image:
        "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B1600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/29/1a/291a36091c0b1d9b31d3aee89ebc5bd371786d14.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D",
      name: "Grön striped turtleneck",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
      price: "900",
      articlenumber: "LKO-167",
      category: "Tröjor",
    },
    {
      id: "8",
      image:
        "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B1600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2%5D,origin%5Bdam%5D,source%5B/5a/38/5a38fea1fe57cc07570eef3d456c9c0164b68ec2.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D",
      name: "Svart striped klänning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
      price: "1300",
      articlenumber: "ZAQ-789",
      category: "Klänningar",
    },
    {
      id: "9",
      image:
        "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B1600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2019102%5D,source%5B02_0767342_001_001%5D,type%5BPRODUCT%5D&call=url%5Bfile:/product/dynamic.chain%5D",
      name: "Svarta slim jeans",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
      price: "3300",
      articlenumber: "CBA-432",
      category: "Byxor",
    },
    {
      id: "10",
      image:
        "https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B1600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/e2/2e/e22e0047e9d6031ab0504edf91f61f944e120af1.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D",
      name: "Grå hoodie",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
      price: "800",
      articlenumber: "QTE-235",
      category: "REA",
    },
  ];
  res.json(products);
});

router.get("/categories", function (req, res) {
  const categories = [
    {
      id: "1",
      name: "Byxor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
    },
    {
      id: "2",
      name: "Tröjor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
    },
    {
      id: "3",
      name: "Klänningar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
    },
    {
      id: "4",
      name: "REA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper dolor sed nisi mattis, a commodo justo luctus. Nam et interdum justo. Fusce viverra elit quam, non pharetra turpis aliquet eu. Praesent varius, ex ac iaculis iaculis, tortor nisi iaculis est, eget consequat eros lacus eu urna. Sed diam mi, consequat nec orci placerat, facilisis bibendum purus. Maecenas volutpat, nibh molestie blandit maximus, nunc odio vestibulum lorem, non gravida eros urna eget justo.",
    },
  ];
  res.json(categories);
});

module.exports = router;
