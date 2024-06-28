import { Box, Button, Chip, Dialog, DialogActions, DialogContent, Link, Typography } from "@mui/material";

// {
//     "recipe": {
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_006c5ad8c5cc4ab29f67a776b8a903c3",
//         "label": "Creamy mushroom lasagne",
//         "image": "https://edamam-product-images.s3.amazonaws.com/web-img/74e/74eb8962e5e4212d69f961f354e46577.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLWVhc3QtMSJIMEYCIQCruxXs0yG7sFo2WrBb5ERoyVvTjCnsUYgEB7QkybjXswIhAJg%2F%2FGuAx%2F33nsDnKafo21KmBTJoPnlK1uwEbX7RFHGbKsIFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzAz9hZxcMzbCXMKY8qlgWaxE3fFlXuJl3YdoWCtl7GDbm46h2FzLt1Y4p2VF3hpgB53S9bl%2BpFARJw0kdzGRIer96l6ASDCsoTSoNF0z8rY3zuaNGivOgjsIl8fDH%2FbkApQX4%2FQjMcMxghFkXIapq0A9prVY7lwU6KccSzdLTyv11jkClSiD6iHuw%2Bb3Xv7Kql%2FfOK4zS%2BIvo7OA3o8uj3SIi%2BmK8VNL7nbvg46wfdFjhtf6xMnrosxTZVy%2BDGlaJp8evIKE7a3PhH5QUaPRPwolTSHgeB1k4wedfDiHxJ977StWCTNS5KWKtKs1wXXQmNx0qsRuW7sHe9YTzdPv5kL1tuWtUmxNQsMAq84KPUso87p4G%2FrFLy8eGBugN3qXemsme10EvtfYrw2sL7oO6XKG20g5xWY%2Bhg5i5WG45IgVUl%2FUY%2F0bDyWVKaNNZaYAooGbzkcBBp9IIN1yIdv2a%2B8H5%2Buf3WiB8jnI5sGqqIO9uuMyXwAqsfD%2FbhszK2mgBouC30ioQytPVQpsE37DwITTVxNmXS6P7dU1%2FH9OHJBlPaiM5Bk4v3n57iblNi8KdYF%2BWPjPVKPDJQeUdt9ML7O5cDd6esvbiDb6yYVMVYEEO%2Fg1ZVOveqzZ536oDekIUgv1P%2FcAn3Y6soTXEmzg6dU86rIk%2FSwVAkpmEsM6vQe0hlPZFZE%2B3cFe2cO1zYUvFD4sjslY4U9R00IZ8wpe1zdSSoD%2Bqz7L3xAzwDB7WW7MJYv6326%2BPLFy3I69o2VxfSeVTyuPJtyy1isGKoyuACIIQ2KLQg940sjdVrCZRueCZ%2Bm8OwH5i6BUqEPYl8Ghy6zkb9ih3zBkQgDbBBYCt42SIBmCVvZ1w675n0Zc5kmBv2cE4ogM5tvlAdNol4Z%2FJBT9nLojDO6emzBjqwAYPA3YjEYjLZFrg3s4e4g%2BN7Dhf668cIbUwa41Rs9xXZ2Cc%2F8sCXUGjrQzhF8sScVu%2BvMkXVBcls%2BKV6ESbwknEsF3hbXx1S3EoUz4qlCpId9pMjGRiSSLnO7UUMBYC8JAoC4uEqHXwqHk5vd%2FZ%2BeT59baTIRyXZP2uEMUFi6OrEavuYZtfL32Zi%2FEVFL1YesMc34txHqqetKLcKrVfdnJtQXc7HHk6f0VP00dPU%2B%2BCZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240625T085632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNFQKBUIB%2F20240625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1f28a72e482df4cde4b4de117674a59f4b67bc8a933bb1d21210ae58868c0cc1",
//         "images": {
//             "THUMBNAIL": {
//                 "url": "https://edamam-product-images.s3.amazonaws.com/web-img/74e/74eb8962e5e4212d69f961f354e46577-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLWVhc3QtMSJIMEYCIQCruxXs0yG7sFo2WrBb5ERoyVvTjCnsUYgEB7QkybjXswIhAJg%2F%2FGuAx%2F33nsDnKafo21KmBTJoPnlK1uwEbX7RFHGbKsIFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzAz9hZxcMzbCXMKY8qlgWaxE3fFlXuJl3YdoWCtl7GDbm46h2FzLt1Y4p2VF3hpgB53S9bl%2BpFARJw0kdzGRIer96l6ASDCsoTSoNF0z8rY3zuaNGivOgjsIl8fDH%2FbkApQX4%2FQjMcMxghFkXIapq0A9prVY7lwU6KccSzdLTyv11jkClSiD6iHuw%2Bb3Xv7Kql%2FfOK4zS%2BIvo7OA3o8uj3SIi%2BmK8VNL7nbvg46wfdFjhtf6xMnrosxTZVy%2BDGlaJp8evIKE7a3PhH5QUaPRPwolTSHgeB1k4wedfDiHxJ977StWCTNS5KWKtKs1wXXQmNx0qsRuW7sHe9YTzdPv5kL1tuWtUmxNQsMAq84KPUso87p4G%2FrFLy8eGBugN3qXemsme10EvtfYrw2sL7oO6XKG20g5xWY%2Bhg5i5WG45IgVUl%2FUY%2F0bDyWVKaNNZaYAooGbzkcBBp9IIN1yIdv2a%2B8H5%2Buf3WiB8jnI5sGqqIO9uuMyXwAqsfD%2FbhszK2mgBouC30ioQytPVQpsE37DwITTVxNmXS6P7dU1%2FH9OHJBlPaiM5Bk4v3n57iblNi8KdYF%2BWPjPVKPDJQeUdt9ML7O5cDd6esvbiDb6yYVMVYEEO%2Fg1ZVOveqzZ536oDekIUgv1P%2FcAn3Y6soTXEmzg6dU86rIk%2FSwVAkpmEsM6vQe0hlPZFZE%2B3cFe2cO1zYUvFD4sjslY4U9R00IZ8wpe1zdSSoD%2Bqz7L3xAzwDB7WW7MJYv6326%2BPLFy3I69o2VxfSeVTyuPJtyy1isGKoyuACIIQ2KLQg940sjdVrCZRueCZ%2Bm8OwH5i6BUqEPYl8Ghy6zkb9ih3zBkQgDbBBYCt42SIBmCVvZ1w675n0Zc5kmBv2cE4ogM5tvlAdNol4Z%2FJBT9nLojDO6emzBjqwAYPA3YjEYjLZFrg3s4e4g%2BN7Dhf668cIbUwa41Rs9xXZ2Cc%2F8sCXUGjrQzhF8sScVu%2BvMkXVBcls%2BKV6ESbwknEsF3hbXx1S3EoUz4qlCpId9pMjGRiSSLnO7UUMBYC8JAoC4uEqHXwqHk5vd%2FZ%2BeT59baTIRyXZP2uEMUFi6OrEavuYZtfL32Zi%2FEVFL1YesMc34txHqqetKLcKrVfdnJtQXc7HHk6f0VP00dPU%2B%2BCZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240625T085632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFNFQKBUIB%2F20240625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1ec172c2affed4dff906ce28f0c67e794a00ade3964c5ab8b099c5d1b8629f2d",
//                 "width": 100,
//                 "height": 100
//             },
//             "SMALL": {
//                 "url": "https://edamam-product-images.s3.amazonaws.com/web-img/74e/74eb8962e5e4212d69f961f354e46577-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLWVhc3QtMSJIMEYCIQCruxXs0yG7sFo2WrBb5ERoyVvTjCnsUYgEB7QkybjXswIhAJg%2F%2FGuAx%2F33nsDnKafo21KmBTJoPnlK1uwEbX7RFHGbKsIFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzAz9hZxcMzbCXMKY8qlgWaxE3fFlXuJl3YdoWCtl7GDbm46h2FzLt1Y4p2VF3hpgB53S9bl%2BpFARJw0kdzGRIer96l6ASDCsoTSoNF0z8rY3zuaNGivOgjsIl8fDH%2FbkApQX4%2FQjMcMxghFkXIapq0A9prVY7lwU6KccSzdLTyv11jkClSiD6iHuw%2Bb3Xv7Kql%2FfOK4zS%2BIvo7OA3o8uj3SIi%2BmK8VNL7nbvg46wfdFjhtf6xMnrosxTZVy%2BDGlaJp8evIKE7a3PhH5QUaPRPwolTSHgeB1k4wedfDiHxJ977StWCTNS5KWKtKs1wXXQmNx0qsRuW7sHe9YTzdPv5kL1tuWtUmxNQsMAq84KPUso87p4G%2FrFLy8eGBugN3qXemsme10EvtfYrw2sL7oO6XKG20g5xWY%2Bhg5i5WG45IgVUl%2FUY%2F0bDyWVKaNNZaYAooGbzkcBBp9IIN1yIdv2a%2B8H5%2Buf3WiB8jnI5sGqqIO9uuMyXwAqsfD%2FbhszK2mgBouC30ioQytPVQpsE37DwITTVxNmXS6P7dU1%2FH9OHJBlPaiM5Bk4v3n57iblNi8KdYF%2BWPjPVKPDJQeUdt9ML7O5cDd6esvbiDb6yYVMVYEEO%2Fg1ZVOveqzZ536oDekIUgv1P%2FcAn3Y6soTXEmzg6dU86rIk%2FSwVAkpmEsM6vQe0hlPZFZE%2B3cFe2cO1zYUvFD4sjslY4U9R00IZ8wpe1zdSSoD%2Bqz7L3xAzwDB7WW7MJYv6326%2BPLFy3I69o2VxfSeVTyuPJtyy1isGKoyuACIIQ2KLQg940sjdVrCZRueCZ%2Bm8OwH5i6BUqEPYl8Ghy6zkb9ih3zBkQgDbBBYCt42SIBmCVvZ1w675n0Zc5kmBv2cE4ogM5tvlAdNol4Z%2FJBT9nLojDO6emzBjqwAYPA3YjEYjLZFrg3s4e4g%2BN7Dhf668cIbUwa41Rs9xXZ2Cc%2F8sCXUGjrQzhF8sScVu%2BvMkXVBcls%2BKV6ESbwknEsF3hbXx1S3EoUz4qlCpId9pMjGRiSSLnO7UUMBYC8JAoC4uEqHXwqHk5vd%2FZ%2BeT59baTIRyXZP2uEMUFi6OrEavuYZtfL32Zi%2FEVFL1YesMc34txHqqetKLcKrVfdnJtQXc7HHk6f0VP00dPU%2B%2BCZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240625T085632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNFQKBUIB%2F20240625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a36e5504d94623c2293c327cc86cedf9953427384fdd8aa399949ae6788a6d3a",
//                 "width": 200,
//                 "height": 200
//             },
//             "REGULAR": {
//                 "url": "https://edamam-product-images.s3.amazonaws.com/web-img/74e/74eb8962e5e4212d69f961f354e46577.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLWVhc3QtMSJIMEYCIQCruxXs0yG7sFo2WrBb5ERoyVvTjCnsUYgEB7QkybjXswIhAJg%2F%2FGuAx%2F33nsDnKafo21KmBTJoPnlK1uwEbX7RFHGbKsIFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzAz9hZxcMzbCXMKY8qlgWaxE3fFlXuJl3YdoWCtl7GDbm46h2FzLt1Y4p2VF3hpgB53S9bl%2BpFARJw0kdzGRIer96l6ASDCsoTSoNF0z8rY3zuaNGivOgjsIl8fDH%2FbkApQX4%2FQjMcMxghFkXIapq0A9prVY7lwU6KccSzdLTyv11jkClSiD6iHuw%2Bb3Xv7Kql%2FfOK4zS%2BIvo7OA3o8uj3SIi%2BmK8VNL7nbvg46wfdFjhtf6xMnrosxTZVy%2BDGlaJp8evIKE7a3PhH5QUaPRPwolTSHgeB1k4wedfDiHxJ977StWCTNS5KWKtKs1wXXQmNx0qsRuW7sHe9YTzdPv5kL1tuWtUmxNQsMAq84KPUso87p4G%2FrFLy8eGBugN3qXemsme10EvtfYrw2sL7oO6XKG20g5xWY%2Bhg5i5WG45IgVUl%2FUY%2F0bDyWVKaNNZaYAooGbzkcBBp9IIN1yIdv2a%2B8H5%2Buf3WiB8jnI5sGqqIO9uuMyXwAqsfD%2FbhszK2mgBouC30ioQytPVQpsE37DwITTVxNmXS6P7dU1%2FH9OHJBlPaiM5Bk4v3n57iblNi8KdYF%2BWPjPVKPDJQeUdt9ML7O5cDd6esvbiDb6yYVMVYEEO%2Fg1ZVOveqzZ536oDekIUgv1P%2FcAn3Y6soTXEmzg6dU86rIk%2FSwVAkpmEsM6vQe0hlPZFZE%2B3cFe2cO1zYUvFD4sjslY4U9R00IZ8wpe1zdSSoD%2Bqz7L3xAzwDB7WW7MJYv6326%2BPLFy3I69o2VxfSeVTyuPJtyy1isGKoyuACIIQ2KLQg940sjdVrCZRueCZ%2Bm8OwH5i6BUqEPYl8Ghy6zkb9ih3zBkQgDbBBYCt42SIBmCVvZ1w675n0Zc5kmBv2cE4ogM5tvlAdNol4Z%2FJBT9nLojDO6emzBjqwAYPA3YjEYjLZFrg3s4e4g%2BN7Dhf668cIbUwa41Rs9xXZ2Cc%2F8sCXUGjrQzhF8sScVu%2BvMkXVBcls%2BKV6ESbwknEsF3hbXx1S3EoUz4qlCpId9pMjGRiSSLnO7UUMBYC8JAoC4uEqHXwqHk5vd%2FZ%2BeT59baTIRyXZP2uEMUFi6OrEavuYZtfL32Zi%2FEVFL1YesMc34txHqqetKLcKrVfdnJtQXc7HHk6f0VP00dPU%2B%2BCZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240625T085632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNFQKBUIB%2F20240625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1f28a72e482df4cde4b4de117674a59f4b67bc8a933bb1d21210ae58868c0cc1",
//                 "width": 300,
//                 "height": 300
//             },
//             "LARGE": {
//                 "url": "https://edamam-product-images.s3.amazonaws.com/web-img/74e/74eb8962e5e4212d69f961f354e46577-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLWVhc3QtMSJIMEYCIQCruxXs0yG7sFo2WrBb5ERoyVvTjCnsUYgEB7QkybjXswIhAJg%2F%2FGuAx%2F33nsDnKafo21KmBTJoPnlK1uwEbX7RFHGbKsIFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzAz9hZxcMzbCXMKY8qlgWaxE3fFlXuJl3YdoWCtl7GDbm46h2FzLt1Y4p2VF3hpgB53S9bl%2BpFARJw0kdzGRIer96l6ASDCsoTSoNF0z8rY3zuaNGivOgjsIl8fDH%2FbkApQX4%2FQjMcMxghFkXIapq0A9prVY7lwU6KccSzdLTyv11jkClSiD6iHuw%2Bb3Xv7Kql%2FfOK4zS%2BIvo7OA3o8uj3SIi%2BmK8VNL7nbvg46wfdFjhtf6xMnrosxTZVy%2BDGlaJp8evIKE7a3PhH5QUaPRPwolTSHgeB1k4wedfDiHxJ977StWCTNS5KWKtKs1wXXQmNx0qsRuW7sHe9YTzdPv5kL1tuWtUmxNQsMAq84KPUso87p4G%2FrFLy8eGBugN3qXemsme10EvtfYrw2sL7oO6XKG20g5xWY%2Bhg5i5WG45IgVUl%2FUY%2F0bDyWVKaNNZaYAooGbzkcBBp9IIN1yIdv2a%2B8H5%2Buf3WiB8jnI5sGqqIO9uuMyXwAqsfD%2FbhszK2mgBouC30ioQytPVQpsE37DwITTVxNmXS6P7dU1%2FH9OHJBlPaiM5Bk4v3n57iblNi8KdYF%2BWPjPVKPDJQeUdt9ML7O5cDd6esvbiDb6yYVMVYEEO%2Fg1ZVOveqzZ536oDekIUgv1P%2FcAn3Y6soTXEmzg6dU86rIk%2FSwVAkpmEsM6vQe0hlPZFZE%2B3cFe2cO1zYUvFD4sjslY4U9R00IZ8wpe1zdSSoD%2Bqz7L3xAzwDB7WW7MJYv6326%2BPLFy3I69o2VxfSeVTyuPJtyy1isGKoyuACIIQ2KLQg940sjdVrCZRueCZ%2Bm8OwH5i6BUqEPYl8Ghy6zkb9ih3zBkQgDbBBYCt42SIBmCVvZ1w675n0Zc5kmBv2cE4ogM5tvlAdNol4Z%2FJBT9nLojDO6emzBjqwAYPA3YjEYjLZFrg3s4e4g%2BN7Dhf668cIbUwa41Rs9xXZ2Cc%2F8sCXUGjrQzhF8sScVu%2BvMkXVBcls%2BKV6ESbwknEsF3hbXx1S3EoUz4qlCpId9pMjGRiSSLnO7UUMBYC8JAoC4uEqHXwqHk5vd%2FZ%2BeT59baTIRyXZP2uEMUFi6OrEavuYZtfL32Zi%2FEVFL1YesMc34txHqqetKLcKrVfdnJtQXc7HHk6f0VP00dPU%2B%2BCZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240625T085632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNFQKBUIB%2F20240625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=38aa9781ff14d975fa8197ee7d328bd839e639a5a59ffefd563d2d2a030e0110",
//                 "width": 600,
//                 "height": 600
//             }
//         },
//         "source": "BBC Good Food",
//         "url": "https://www.bbcgoodfood.com/premium/creamy-mushroom-lasagne",
//         "shareAs": "http://www.edamam.com/recipe/creamy-mushroom-lasagne-006c5ad8c5cc4ab29f67a776b8a903c3/lasagne",
//         "yield": 10.0,
//         "dietLabels": [
//             "Balanced",
//             "Low-Sodium"
//         ],
//         "healthLabels": [
//             "Sugar-Conscious",
//             "Low Potassium",
//             "Kidney-Friendly",
//             "Vegetarian",
//             "Pescatarian",
//             "Mediterranean",
//             "Egg-Free",
//             "Peanut-Free",
//             "Tree-Nut-Free",
//             "Soy-Free",
//             "Fish-Free",
//             "Shellfish-Free",
//             "Pork-Free",
//             "Red-Meat-Free",
//             "Crustacean-Free",
//             "Celery-Free",
//             "Mustard-Free",
//             "Sesame-Free",
//             "Lupine-Free",
//             "Mollusk-Free",
//             "Alcohol-Free",
//             "Sulfite-Free",
//             "Kosher"
//         ],
//         "cautions": [
//             "Sulfites"
//         ],
//         "ingredientLines": [
//             "1 tbsp olive oil",
//             "400g dried lasagne sheets",
//             "200g grated mozzarella or vegan alternative"
//         ],
//         "ingredients": [
//             {
//                 "text": "1 tbsp olive oil",
//                 "quantity": 1.0,
//                 "measure": "tablespoon",
//                 "food": "olive oil",
//                 "weight": 13.5,
//                 "foodCategory": "Oils",
//                 "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                 "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//             },
//             {
//                 "text": "400g dried lasagne sheets",
//                 "quantity": 400.0,
//                 "measure": "gram",
//                 "food": "lasagne",
//                 "weight": 400.0,
//                 "foodCategory": "grains",
//                 "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
//                 "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
//             },
//             {
//                 "text": "200g grated mozzarella or vegan alternative",
//                 "quantity": 200.0,
//                 "measure": "gram",
//                 "food": "mozzarella",
//                 "weight": 200.0,
//                 "foodCategory": "Cheese",
//                 "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
//                 "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
//             }
//         ],
//         "calories": 2201.34,
//         "totalCO2Emissions": 5484.406593406,
//         "co2EmissionsClass": "D",
//         "totalWeight": 613.5,
//         "totalTime": 100.0,
//         "cuisineType": [
//             "italian"
//         ],
//         "mealType": [
//             "lunch/dinner"
//         ],
//         "dishType": [
//             "main course"
//         ],
//         "totalNutrients": {
//             "ENERC_KCAL": {
//                 "label": "Energy",
//                 "quantity": 2201.34,
//                 "unit": "kcal"
//             },
//             "FAT": {
//                 "label": "Fat",
//                 "quantity": 63.74000000000001,
//                 "unit": "g"
//             },
//             "FASAT": {
//                 "label": "Saturated",
//                 "quantity": 30.771,
//                 "unit": "g"
//             },
//             "FATRN": {
//                 "label": "Trans",
//                 "quantity": 0.0,
//                 "unit": "g"
//             },
//             "FAMS": {
//                 "label": "Monounsaturated",
//                 "quantity": 23.679000000000002,
//                 "unit": "g"
//             },
//             "FAPU": {
//                 "label": "Polyunsaturated",
//                 "quantity": 5.2035,
//                 "unit": "g"
//             },
//             "CHOCDF": {
//                 "label": "Carbs",
//                 "quantity": 303.6,
//                 "unit": "g"
//             },
//             "CHOCDF.net": {
//                 "label": "Carbohydrates (net)",
//                 "quantity": 290.8,
//                 "unit": "g"
//             },
//             "FIBTG": {
//                 "label": "Fiber",
//                 "quantity": 12.8,
//                 "unit": "g"
//             },
//             "SUGAR": {
//                 "label": "Sugars",
//                 "quantity": 10.68,
//                 "unit": "g"
//             },
//             "PROCNT": {
//                 "label": "Protein",
//                 "quantity": 96.4,
//                 "unit": "g"
//             },
//             "CHOLE": {
//                 "label": "Cholesterol",
//                 "quantity": 158.0,
//                 "unit": "mg"
//             },
//             "NA": {
//                 "label": "Sodium",
//                 "quantity": 996.27,
//                 "unit": "mg"
//             },
//             "CA": {
//                 "label": "Calcium",
//                 "quantity": 1094.135,
//                 "unit": "mg"
//             },
//             "MG": {
//                 "label": "Magnesium",
//                 "quantity": 252.0,
//                 "unit": "mg"
//             },
//             "K": {
//                 "label": "Potassium",
//                 "quantity": 1044.135,
//                 "unit": "mg"
//             },
//             "FE": {
//                 "label": "Iron",
//                 "quantity": 6.1556,
//                 "unit": "mg"
//             },
//             "ZN": {
//                 "label": "Zinc",
//                 "quantity": 11.48,
//                 "unit": "mg"
//             },
//             "P": {
//                 "label": "Phosphorus",
//                 "quantity": 1464.0,
//                 "unit": "mg"
//             },
//             "VITA_RAE": {
//                 "label": "Vitamin A",
//                 "quantity": 358.0,
//                 "unit": "µg"
//             },
//             "VITC": {
//                 "label": "Vitamin C",
//                 "quantity": 0.0,
//                 "unit": "mg"
//             },
//             "THIA": {
//                 "label": "Thiamin (B1)",
//                 "quantity": 0.41999999999999993,
//                 "unit": "mg"
//             },
//             "RIBF": {
//                 "label": "Riboflavin (B2)",
//                 "quantity": 0.8059999999999999,
//                 "unit": "mg"
//             },
//             "NIA": {
//                 "label": "Niacin (B3)",
//                 "quantity": 7.008,
//                 "unit": "mg"
//             },
//             "VITB6A": {
//                 "label": "Vitamin B6",
//                 "quantity": 0.6419999999999999,
//                 "unit": "mg"
//             },
//             "FOLDFE": {
//                 "label": "Folate equivalent (total)",
//                 "quantity": 86.0,
//                 "unit": "µg"
//             },
//             "FOLFD": {
//                 "label": "Folate (food)",
//                 "quantity": 86.0,
//                 "unit": "µg"
//             },
//             "FOLAC": {
//                 "label": "Folic acid",
//                 "quantity": 0.0,
//                 "unit": "µg"
//             },
//             "VITB12": {
//                 "label": "Vitamin B12",
//                 "quantity": 4.56,
//                 "unit": "µg"
//             },
//             "VITD": {
//                 "label": "Vitamin D",
//                 "quantity": 0.8,
//                 "unit": "µg"
//             },
//             "TOCPHA": {
//                 "label": "Vitamin E",
//                 "quantity": 2.7640000000000002,
//                 "unit": "mg"
//             },
//             "VITK1": {
//                 "label": "Vitamin K",
//                 "quantity": 13.126999999999999,
//                 "unit": "µg"
//             },
//             "WATER": {
//                 "label": "Water",
//                 "quantity": 139.6,
//                 "unit": "g"
//             }
//         },
//         "totalDaily": {
//             "ENERC_KCAL": {
//                 "label": "Energy",
//                 "quantity": 110.067,
//                 "unit": "%"
//             },
//             "FAT": {
//                 "label": "Fat",
//                 "quantity": 98.06153846153848,
//                 "unit": "%"
//             },
//             "FASAT": {
//                 "label": "Saturated",
//                 "quantity": 153.855,
//                 "unit": "%"
//             },
//             "CHOCDF": {
//                 "label": "Carbs",
//                 "quantity": 101.20000000000002,
//                 "unit": "%"
//             },
//             "FIBTG": {
//                 "label": "Fiber",
//                 "quantity": 51.2,
//                 "unit": "%"
//             },
//             "PROCNT": {
//                 "label": "Protein",
//                 "quantity": 192.8,
//                 "unit": "%"
//             },
//             "CHOLE": {
//                 "label": "Cholesterol",
//                 "quantity": 52.666666666666664,
//                 "unit": "%"
//             },
//             "NA": {
//                 "label": "Sodium",
//                 "quantity": 41.51125,
//                 "unit": "%"
//             },
//             "CA": {
//                 "label": "Calcium",
//                 "quantity": 109.4135,
//                 "unit": "%"
//             },
//             "MG": {
//                 "label": "Magnesium",
//                 "quantity": 60.0,
//                 "unit": "%"
//             },
//             "K": {
//                 "label": "Potassium",
//                 "quantity": 22.215638297872342,
//                 "unit": "%"
//             },
//             "FE": {
//                 "label": "Iron",
//                 "quantity": 34.19777777777777,
//                 "unit": "%"
//             },
//             "ZN": {
//                 "label": "Zinc",
//                 "quantity": 104.36363636363636,
//                 "unit": "%"
//             },
//             "P": {
//                 "label": "Phosphorus",
//                 "quantity": 209.14285714285714,
//                 "unit": "%"
//             },
//             "VITA_RAE": {
//                 "label": "Vitamin A",
//                 "quantity": 39.77777777777778,
//                 "unit": "%"
//             },
//             "VITC": {
//                 "label": "Vitamin C",
//                 "quantity": 0.0,
//                 "unit": "%"
//             },
//             "THIA": {
//                 "label": "Thiamin (B1)",
//                 "quantity": 34.99999999999999,
//                 "unit": "%"
//             },
//             "RIBF": {
//                 "label": "Riboflavin (B2)",
//                 "quantity": 61.99999999999999,
//                 "unit": "%"
//             },
//             "NIA": {
//                 "label": "Niacin (B3)",
//                 "quantity": 43.8,
//                 "unit": "%"
//             },
//             "VITB6A": {
//                 "label": "Vitamin B6",
//                 "quantity": 49.38461538461537,
//                 "unit": "%"
//             },
//             "FOLDFE": {
//                 "label": "Folate equivalent (total)",
//                 "quantity": 21.5,
//                 "unit": "%"
//             },
//             "VITB12": {
//                 "label": "Vitamin B12",
//                 "quantity": 189.99999999999997,
//                 "unit": "%"
//             },
//             "VITD": {
//                 "label": "Vitamin D",
//                 "quantity": 5.333333333333333,
//                 "unit": "%"
//             },
//             "TOCPHA": {
//                 "label": "Vitamin E",
//                 "quantity": 18.42666666666667,
//                 "unit": "%"
//             },
//             "VITK1": {
//                 "label": "Vitamin K",
//                 "quantity": 10.939166666666665,
//                 "unit": "%"
//             }
//         },
//         "digest": [
//             {
//                 "label": "Fat",
//                 "tag": "FAT",
//                 "schemaOrgTag": "fatContent",
//                 "total": 63.74000000000001,
//                 "hasRDI": true,
//                 "daily": 98.06153846153848,
//                 "unit": "g",
//                 "sub": [
//                     {
//                         "label": "Saturated",
//                         "tag": "FASAT",
//                         "schemaOrgTag": "saturatedFatContent",
//                         "total": 30.771,
//                         "hasRDI": true,
//                         "daily": 153.855,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Trans",
//                         "tag": "FATRN",
//                         "schemaOrgTag": "transFatContent",
//                         "total": 0.0,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Monounsaturated",
//                         "tag": "FAMS",
//                         "schemaOrgTag": null,
//                         "total": 23.679000000000002,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Polyunsaturated",
//                         "tag": "FAPU",
//                         "schemaOrgTag": null,
//                         "total": 5.2035,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     }
//                 ]
//             },
//             {
//                 "label": "Carbs",
//                 "tag": "CHOCDF",
//                 "schemaOrgTag": "carbohydrateContent",
//                 "total": 303.6,
//                 "hasRDI": true,
//                 "daily": 101.20000000000002,
//                 "unit": "g",
//                 "sub": [
//                     {
//                         "label": "Carbs (net)",
//                         "tag": "CHOCDF.net",
//                         "schemaOrgTag": null,
//                         "total": 290.8,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Fiber",
//                         "tag": "FIBTG",
//                         "schemaOrgTag": "fiberContent",
//                         "total": 12.8,
//                         "hasRDI": true,
//                         "daily": 51.2,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Sugars",
//                         "tag": "SUGAR",
//                         "schemaOrgTag": "sugarContent",
//                         "total": 10.68,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Sugars, added",
//                         "tag": "SUGAR.added",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     }
//                 ]
//             },
//             {
//                 "label": "Protein",
//                 "tag": "PROCNT",
//                 "schemaOrgTag": "proteinContent",
//                 "total": 96.4,
//                 "hasRDI": true,
//                 "daily": 192.8,
//                 "unit": "g"
//             },
//             {
//                 "label": "Cholesterol",
//                 "tag": "CHOLE",
//                 "schemaOrgTag": "cholesterolContent",
//                 "total": 158.0,
//                 "hasRDI": true,
//                 "daily": 52.666666666666664,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Sodium",
//                 "tag": "NA",
//                 "schemaOrgTag": "sodiumContent",
//                 "total": 996.27,
//                 "hasRDI": true,
//                 "daily": 41.51125,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Calcium",
//                 "tag": "CA",
//                 "schemaOrgTag": null,
//                 "total": 1094.135,
//                 "hasRDI": true,
//                 "daily": 109.4135,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Magnesium",
//                 "tag": "MG",
//                 "schemaOrgTag": null,
//                 "total": 252.0,
//                 "hasRDI": true,
//                 "daily": 60.0,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Potassium",
//                 "tag": "K",
//                 "schemaOrgTag": null,
//                 "total": 1044.135,
//                 "hasRDI": true,
//                 "daily": 22.215638297872342,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Iron",
//                 "tag": "FE",
//                 "schemaOrgTag": null,
//                 "total": 6.1556,
//                 "hasRDI": true,
//                 "daily": 34.19777777777777,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Zinc",
//                 "tag": "ZN",
//                 "schemaOrgTag": null,
//                 "total": 11.48,
//                 "hasRDI": true,
//                 "daily": 104.36363636363636,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Phosphorus",
//                 "tag": "P",
//                 "schemaOrgTag": null,
//                 "total": 1464.0,
//                 "hasRDI": true,
//                 "daily": 209.14285714285714,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Vitamin A",
//                 "tag": "VITA_RAE",
//                 "schemaOrgTag": null,
//                 "total": 358.0,
//                 "hasRDI": true,
//                 "daily": 39.77777777777778,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Vitamin C",
//                 "tag": "VITC",
//                 "schemaOrgTag": null,
//                 "total": 0.0,
//                 "hasRDI": true,
//                 "daily": 0.0,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Thiamin (B1)",
//                 "tag": "THIA",
//                 "schemaOrgTag": null,
//                 "total": 0.41999999999999993,
//                 "hasRDI": true,
//                 "daily": 34.99999999999999,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Riboflavin (B2)",
//                 "tag": "RIBF",
//                 "schemaOrgTag": null,
//                 "total": 0.8059999999999999,
//                 "hasRDI": true,
//                 "daily": 61.99999999999999,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Niacin (B3)",
//                 "tag": "NIA",
//                 "schemaOrgTag": null,
//                 "total": 7.008,
//                 "hasRDI": true,
//                 "daily": 43.8,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Vitamin B6",
//                 "tag": "VITB6A",
//                 "schemaOrgTag": null,
//                 "total": 0.6419999999999999,
//                 "hasRDI": true,
//                 "daily": 49.38461538461537,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Folate equivalent (total)",
//                 "tag": "FOLDFE",
//                 "schemaOrgTag": null,
//                 "total": 86.0,
//                 "hasRDI": true,
//                 "daily": 21.5,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Folate (food)",
//                 "tag": "FOLFD",
//                 "schemaOrgTag": null,
//                 "total": 86.0,
//                 "hasRDI": false,
//                 "daily": 0.0,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Folic acid",
//                 "tag": "FOLAC",
//                 "schemaOrgTag": null,
//                 "total": 0.0,
//                 "hasRDI": false,
//                 "daily": 0.0,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Vitamin B12",
//                 "tag": "VITB12",
//                 "schemaOrgTag": null,
//                 "total": 4.56,
//                 "hasRDI": true,
//                 "daily": 189.99999999999997,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Vitamin D",
//                 "tag": "VITD",
//                 "schemaOrgTag": null,
//                 "total": 0.8,
//                 "hasRDI": true,
//                 "daily": 5.333333333333333,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Vitamin E",
//                 "tag": "TOCPHA",
//                 "schemaOrgTag": null,
//                 "total": 2.7640000000000002,
//                 "hasRDI": true,
//                 "daily": 18.42666666666667,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Vitamin K",
//                 "tag": "VITK1",
//                 "schemaOrgTag": null,
//                 "total": 13.126999999999999,
//                 "hasRDI": true,
//                 "daily": 10.939166666666665,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Sugar alcohols",
//                 "tag": "Sugar.alcohol",
//                 "schemaOrgTag": null,
//                 "total": 0.0,
//                 "hasRDI": false,
//                 "daily": 0.0,
//                 "unit": "g"
//             },
//             {
//                 "label": "Water",
//                 "tag": "WATER",
//                 "schemaOrgTag": null,
//                 "total": 139.6,
//                 "hasRDI": false,
//                 "daily": 0.0,
//                 "unit": "g"
//             }
//         ]
//     },
//     "_links": {
//         "self": {
//             "href": "https://api.edamam.com/api/recipes/v2/006c5ad8c5cc4ab29f67a776b8a903c3?type=public&app_id=d00fa156&app_key=678f4f218ea9270187157dc256f6f27f",
//             "title": "Self"
//         }
//     }
// },
// {
//     "recipe": {
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0f6199b0c6a6283e57cf42056aaf6f1f",
//         "label": "Spinach lasagne",
//         "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ef9/ef96b1ac7cc124f7404ef245f5e8db2a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLWVhc3QtMSJIMEYCIQCruxXs0yG7sFo2WrBb5ERoyVvTjCnsUYgEB7QkybjXswIhAJg%2F%2FGuAx%2F33nsDnKafo21KmBTJoPnlK1uwEbX7RFHGbKsIFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzAz9hZxcMzbCXMKY8qlgWaxE3fFlXuJl3YdoWCtl7GDbm46h2FzLt1Y4p2VF3hpgB53S9bl%2BpFARJw0kdzGRIer96l6ASDCsoTSoNF0z8rY3zuaNGivOgjsIl8fDH%2FbkApQX4%2FQjMcMxghFkXIapq0A9prVY7lwU6KccSzdLTyv11jkClSiD6iHuw%2Bb3Xv7Kql%2FfOK4zS%2BIvo7OA3o8uj3SIi%2BmK8VNL7nbvg46wfdFjhtf6xMnrosxTZVy%2BDGlaJp8evIKE7a3PhH5QUaPRPwolTSHgeB1k4wedfDiHxJ977StWCTNS5KWKtKs1wXXQmNx0qsRuW7sHe9YTzdPv5kL1tuWtUmxNQsMAq84KPUso87p4G%2FrFLy8eGBugN3qXemsme10EvtfYrw2sL7oO6XKG20g5xWY%2Bhg5i5WG45IgVUl%2FUY%2F0bDyWVKaNNZaYAooGbzkcBBp9IIN1yIdv2a%2B8H5%2Buf3WiB8jnI5sGqqIO9uuMyXwAqsfD%2FbhszK2mgBouC30ioQytPVQpsE37DwITTVxNmXS6P7dU1%2FH9OHJBlPaiM5Bk4v3n57iblNi8KdYF%2BWPjPVKPDJQeUdt9ML7O5cDd6esvbiDb6yYVMVYEEO%2Fg1ZVOveqzZ536oDekIUgv1P%2FcAn3Y6soTXEmzg6dU86rIk%2FSwVAkpmEsM6vQe0hlPZFZE%2B3cFe2cO1zYUvFD4sjslY4U9R00IZ8wpe1zdSSoD%2Bqz7L3xAzwDB7WW7MJYv6326%2BPLFy3I69o2VxfSeVTyuPJtyy1isGKoyuACIIQ2KLQg940sjdVrCZRueCZ%2Bm8OwH5i6BUqEPYl8Ghy6zkb9ih3zBkQgDbBBYCt42SIBmCVvZ1w675n0Zc5kmBv2cE4ogM5tvlAdNol4Z%2FJBT9nLojDO6emzBjqwAYPA3YjEYjLZFrg3s4e4g%2BN7Dhf668cIbUwa41Rs9xXZ2Cc%2F8sCXUGjrQzhF8sScVu%2BvMkXVBcls%2BKV6ESbwknEsF3hbXx1S3EoUz4qlCpId9pMjGRiSSLnO7UUMBYC8JAoC4uEqHXwqHk5vd%2FZ%2BeT59baTIRyXZP2uEMUFi6OrEavuYZtfL32Zi%2FEVFL1YesMc34txHqqetKLcKrVfdnJtQXc7HHk6f0VP00dPU%2B%2BCZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240625T085632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFNFQKBUIB%2F20240625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fabdb7329cb039b72dd114c875d37b95ac3060d1d385da013e682bb0e8c50edd",
//         "images": {
//             "THUMBNAIL": {
//                 "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ef9/ef96b1ac7cc124f7404ef245f5e8db2a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLWVhc3QtMSJIMEYCIQCruxXs0yG7sFo2WrBb5ERoyVvTjCnsUYgEB7QkybjXswIhAJg%2F%2FGuAx%2F33nsDnKafo21KmBTJoPnlK1uwEbX7RFHGbKsIFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzAz9hZxcMzbCXMKY8qlgWaxE3fFlXuJl3YdoWCtl7GDbm46h2FzLt1Y4p2VF3hpgB53S9bl%2BpFARJw0kdzGRIer96l6ASDCsoTSoNF0z8rY3zuaNGivOgjsIl8fDH%2FbkApQX4%2FQjMcMxghFkXIapq0A9prVY7lwU6KccSzdLTyv11jkClSiD6iHuw%2Bb3Xv7Kql%2FfOK4zS%2BIvo7OA3o8uj3SIi%2BmK8VNL7nbvg46wfdFjhtf6xMnrosxTZVy%2BDGlaJp8evIKE7a3PhH5QUaPRPwolTSHgeB1k4wedfDiHxJ977StWCTNS5KWKtKs1wXXQmNx0qsRuW7sHe9YTzdPv5kL1tuWtUmxNQsMAq84KPUso87p4G%2FrFLy8eGBugN3qXemsme10EvtfYrw2sL7oO6XKG20g5xWY%2Bhg5i5WG45IgVUl%2FUY%2F0bDyWVKaNNZaYAooGbzkcBBp9IIN1yIdv2a%2B8H5%2Buf3WiB8jnI5sGqqIO9uuMyXwAqsfD%2FbhszK2mgBouC30ioQytPVQpsE37DwITTVxNmXS6P7dU1%2FH9OHJBlPaiM5Bk4v3n57iblNi8KdYF%2BWPjPVKPDJQeUdt9ML7O5cDd6esvbiDb6yYVMVYEEO%2Fg1ZVOveqzZ536oDekIUgv1P%2FcAn3Y6soTXEmzg6dU86rIk%2FSwVAkpmEsM6vQe0hlPZFZE%2B3cFe2cO1zYUvFD4sjslY4U9R00IZ8wpe1zdSSoD%2Bqz7L3xAzwDB7WW7MJYv6326%2BPLFy3I69o2VxfSeVTyuPJtyy1isGKoyuACIIQ2KLQg940sjdVrCZRueCZ%2Bm8OwH5i6BUqEPYl8Ghy6zkb9ih3zBkQgDbBBYCt42SIBmCVvZ1w675n0Zc5kmBv2cE4ogM5tvlAdNol4Z%2FJBT9nLojDO6emzBjqwAYPA3YjEYjLZFrg3s4e4g%2BN7Dhf668cIbUwa41Rs9xXZ2Cc%2F8sCXUGjrQzhF8sScVu%2BvMkXVBcls%2BKV6ESbwknEsF3hbXx1S3EoUz4qlCpId9pMjGRiSSLnO7UUMBYC8JAoC4uEqHXwqHk5vd%2FZ%2BeT59baTIRyXZP2uEMUFi6OrEavuYZtfL32Zi%2FEVFL1YesMc34txHqqetKLcKrVfdnJtQXc7HHk6f0VP00dPU%2B%2BCZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240625T085632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNFQKBUIB%2F20240625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=af4a9862cb8cd6e7fd53170c570feec78450d9af3bb64c3854a385fd57865fd1",
//                 "width": 100,
//                 "height": 100
//             },
//             "SMALL": {
//                 "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ef9/ef96b1ac7cc124f7404ef245f5e8db2a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLWVhc3QtMSJIMEYCIQCruxXs0yG7sFo2WrBb5ERoyVvTjCnsUYgEB7QkybjXswIhAJg%2F%2FGuAx%2F33nsDnKafo21KmBTJoPnlK1uwEbX7RFHGbKsIFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzAz9hZxcMzbCXMKY8qlgWaxE3fFlXuJl3YdoWCtl7GDbm46h2FzLt1Y4p2VF3hpgB53S9bl%2BpFARJw0kdzGRIer96l6ASDCsoTSoNF0z8rY3zuaNGivOgjsIl8fDH%2FbkApQX4%2FQjMcMxghFkXIapq0A9prVY7lwU6KccSzdLTyv11jkClSiD6iHuw%2Bb3Xv7Kql%2FfOK4zS%2BIvo7OA3o8uj3SIi%2BmK8VNL7nbvg46wfdFjhtf6xMnrosxTZVy%2BDGlaJp8evIKE7a3PhH5QUaPRPwolTSHgeB1k4wedfDiHxJ977StWCTNS5KWKtKs1wXXQmNx0qsRuW7sHe9YTzdPv5kL1tuWtUmxNQsMAq84KPUso87p4G%2FrFLy8eGBugN3qXemsme10EvtfYrw2sL7oO6XKG20g5xWY%2Bhg5i5WG45IgVUl%2FUY%2F0bDyWVKaNNZaYAooGbzkcBBp9IIN1yIdv2a%2B8H5%2Buf3WiB8jnI5sGqqIO9uuMyXwAqsfD%2FbhszK2mgBouC30ioQytPVQpsE37DwITTVxNmXS6P7dU1%2FH9OHJBlPaiM5Bk4v3n57iblNi8KdYF%2BWPjPVKPDJQeUdt9ML7O5cDd6esvbiDb6yYVMVYEEO%2Fg1ZVOveqzZ536oDekIUgv1P%2FcAn3Y6soTXEmzg6dU86rIk%2FSwVAkpmEsM6vQe0hlPZFZE%2B3cFe2cO1zYUvFD4sjslY4U9R00IZ8wpe1zdSSoD%2Bqz7L3xAzwDB7WW7MJYv6326%2BPLFy3I69o2VxfSeVTyuPJtyy1isGKoyuACIIQ2KLQg940sjdVrCZRueCZ%2Bm8OwH5i6BUqEPYl8Ghy6zkb9ih3zBkQgDbBBYCt42SIBmCVvZ1w675n0Zc5kmBv2cE4ogM5tvlAdNol4Z%2FJBT9nLojDO6emzBjqwAYPA3YjEYjLZFrg3s4e4g%2BN7Dhf668cIbUwa41Rs9xXZ2Cc%2F8sCXUGjrQzhF8sScVu%2BvMkXVBcls%2BKV6ESbwknEsF3hbXx1S3EoUz4qlCpId9pMjGRiSSLnO7UUMBYC8JAoC4uEqHXwqHk5vd%2FZ%2BeT59baTIRyXZP2uEMUFi6OrEavuYZtfL32Zi%2FEVFL1YesMc34txHqqetKLcKrVfdnJtQXc7HHk6f0VP00dPU%2B%2BCZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240625T085632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNFQKBUIB%2F20240625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f1c31a6c0418241a23d87789740a338a7c6df026716d3fcbebfefa22b9673f32",
//                 "width": 200,
//                 "height": 200
//             },
//             "REGULAR": {
//                 "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ef9/ef96b1ac7cc124f7404ef245f5e8db2a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLWVhc3QtMSJIMEYCIQCruxXs0yG7sFo2WrBb5ERoyVvTjCnsUYgEB7QkybjXswIhAJg%2F%2FGuAx%2F33nsDnKafo21KmBTJoPnlK1uwEbX7RFHGbKsIFCLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzAz9hZxcMzbCXMKY8qlgWaxE3fFlXuJl3YdoWCtl7GDbm46h2FzLt1Y4p2VF3hpgB53S9bl%2BpFARJw0kdzGRIer96l6ASDCsoTSoNF0z8rY3zuaNGivOgjsIl8fDH%2FbkApQX4%2FQjMcMxghFkXIapq0A9prVY7lwU6KccSzdLTyv11jkClSiD6iHuw%2Bb3Xv7Kql%2FfOK4zS%2BIvo7OA3o8uj3SIi%2BmK8VNL7nbvg46wfdFjhtf6xMnrosxTZVy%2BDGlaJp8evIKE7a3PhH5QUaPRPwolTSHgeB1k4wedfDiHxJ977StWCTNS5KWKtKs1wXXQmNx0qsRuW7sHe9YTzdPv5kL1tuWtUmxNQsMAq84KPUso87p4G%2FrFLy8eGBugN3qXemsme10EvtfYrw2sL7oO6XKG20g5xWY%2Bhg5i5WG45IgVUl%2FUY%2F0bDyWVKaNNZaYAooGbzkcBBp9IIN1yIdv2a%2B8H5%2Buf3WiB8jnI5sGqqIO9uuMyXwAqsfD%2FbhszK2mgBouC30ioQytPVQpsE37DwITTVxNmXS6P7dU1%2FH9OHJBlPaiM5Bk4v3n57iblNi8KdYF%2BWPjPVKPDJQeUdt9ML7O5cDd6esvbiDb6yYVMVYEEO%2Fg1ZVOveqzZ536oDekIUgv1P%2FcAn3Y6soTXEmzg6dU86rIk%2FSwVAkpmEsM6vQe0hlPZFZE%2B3cFe2cO1zYUvFD4sjslY4U9R00IZ8wpe1zdSSoD%2Bqz7L3xAzwDB7WW7MJYv6326%2BPLFy3I69o2VxfSeVTyuPJtyy1isGKoyuACIIQ2KLQg940sjdVrCZRueCZ%2Bm8OwH5i6BUqEPYl8Ghy6zkb9ih3zBkQgDbBBYCt42SIBmCVvZ1w675n0Zc5kmBv2cE4ogM5tvlAdNol4Z%2FJBT9nLojDO6emzBjqwAYPA3YjEYjLZFrg3s4e4g%2BN7Dhf668cIbUwa41Rs9xXZ2Cc%2F8sCXUGjrQzhF8sScVu%2BvMkXVBcls%2BKV6ESbwknEsF3hbXx1S3EoUz4qlCpId9pMjGRiSSLnO7UUMBYC8JAoC4uEqHXwqHk5vd%2FZ%2BeT59baTIRyXZP2uEMUFi6OrEavuYZtfL32Zi%2FEVFL1YesMc34txHqqetKLcKrVfdnJtQXc7HHk6f0VP00dPU%2B%2BCZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240625T085632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNFQKBUIB%2F20240625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e743d7d43cecdc201fb69c3c64e5b65414a095db23f0dcf8c6e189acdb75ade9",
//                 "width": 300,
//                 "height": 300
//             }
//         },
//         "source": "Jamie Oliver",
//         "url": "http://www.jamieoliver.com/recipes/pasta-recipes/spinach-lasagne/",
//         "shareAs": "http://www.edamam.com/recipe/spinach-lasagne-0f6199b0c6a6283e57cf42056aaf6f1f/lasagne",
//         "yield": 6.0,
//         "dietLabels": [
//             "Balanced"
//         ],
//         "healthLabels": [
//             "Vegetarian",
//             "Pescatarian",
//             "Egg-Free",
//             "Peanut-Free",
//             "Tree-Nut-Free",
//             "Soy-Free",
//             "Fish-Free",
//             "Shellfish-Free",
//             "Pork-Free",
//             "Red-Meat-Free",
//             "Crustacean-Free",
//             "Celery-Free",
//             "Mustard-Free",
//             "Sesame-Free",
//             "Lupine-Free",
//             "Mollusk-Free",
//             "Alcohol-Free",
//             "Sulfite-Free",
//             "Kosher"
//         ],
//         "cautions": [
//             "Sulfites"
//         ],
//         "ingredientLines": [
//             "70 g unsalted butter",
//             "50 g plain flour",
//             "800 ml milk",
//             "1 fresh bay leaf",
//             "800 g spinach",
//             "200 g ricotta cheese",
//             "1 whole nutmeg , for grating",
//             "300 g fresh lasagne sheets",
//             "100 g Parmesan cheese"
//         ],
//         "ingredients": [
//             {
//                 "text": "70 g unsalted butter",
//                 "quantity": 70.0,
//                 "measure": "gram",
//                 "food": "unsalted butter",
//                 "weight": 70.0,
//                 "foodCategory": "Dairy",
//                 "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
//                 "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
//             },
//             {
//                 "text": "50 g plain flour",
//                 "quantity": 50.0,
//                 "measure": "gram",
//                 "food": "flour",
//                 "weight": 50.0,
//                 "foodCategory": "grains",
//                 "foodId": "food_ahebfs0a985an4aubqaebbipra58",
//                 "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
//             },
//             {
//                 "text": "800 ml milk",
//                 "quantity": 800.0,
//                 "measure": "milliliter",
//                 "food": "milk",
//                 "weight": 825.062153924969,
//                 "foodCategory": "Milk",
//                 "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
//                 "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
//             },
//             {
//                 "text": "1 fresh bay leaf",
//                 "quantity": 1.0,
//                 "measure": "<unit>",
//                 "food": "bay leaf",
//                 "weight": 0.6,
//                 "foodCategory": "Condiments and sauces",
//                 "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
//                 "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
//             },
//             {
//                 "text": "800 g spinach",
//                 "quantity": 800.0,
//                 "measure": "gram",
//                 "food": "spinach",
//                 "weight": 800.0,
//                 "foodCategory": "vegetables",
//                 "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
//                 "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
//             },
//             {
//                 "text": "200 g ricotta cheese",
//                 "quantity": 200.0,
//                 "measure": "gram",
//                 "food": "ricotta cheese",
//                 "weight": 200.0,
//                 "foodCategory": "Cheese",
//                 "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
//                 "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
//             },
//             {
//                 "text": "1 whole nutmeg , for grating",
//                 "quantity": 1.0,
//                 "measure": "<unit>",
//                 "food": "nutmeg",
//                 "weight": 2.0,
//                 "foodCategory": "Condiments and sauces",
//                 "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
//                 "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
//             },
//             {
//                 "text": "300 g fresh lasagne sheets",
//                 "quantity": 300.0,
//                 "measure": "gram",
//                 "food": "fresh lasagne",
//                 "weight": 300.0,
//                 "foodCategory": "grains",
//                 "foodId": "food_abp2hivbz4bvnxbu8himgb0rgmvo",
//                 "image": "https://www.edamam.com/food-img/882/8825533f89f0fde6397f43b22ef20cfe.jpg"
//             },
//             {
//                 "text": "100 g Parmesan cheese",
//                 "quantity": 100.0,
//                 "measure": "gram",
//                 "food": "Parmesan cheese",
//                 "weight": 100.0,
//                 "foodCategory": "Cheese",
//                 "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
//                 "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
//             }
//         ],
//         "calories": 2939.565913894231,
//         "totalCO2Emissions": 12338.421934667085,
//         "co2EmissionsClass": "F",
//         "totalWeight": 2347.662153924969,
//         "totalTime": 50.0,
//         "cuisineType": [
//             "italian"
//         ],
//         "mealType": [
//             "lunch/dinner"
//         ],
//         "dishType": [
//             "main course"
//         ],
//         "totalNutrients": {
//             "ENERC_KCAL": {
//                 "label": "Energy",
//                 "quantity": 2939.565913894231,
//                 "unit": "kcal"
//             },
//             "FAT": {
//                 "label": "Fat",
//                 "quantity": 140.2706800025615,
//                 "unit": "g"
//             },
//             "FASAT": {
//                 "label": "Saturated",
//                 "quantity": 80.43333606300442,
//                 "unit": "g"
//             },
//             "FATRN": {
//                 "label": "Trans",
//                 "quantity": 0.666,
//                 "unit": "g"
//             },
//             "FAMS": {
//                 "label": "Monounsaturated",
//                 "quantity": 36.93024468987075,
//                 "unit": "g"
//             },
//             "FAPU": {
//                 "label": "Polyunsaturated",
//                 "quantity": 9.548111200153688,
//                 "unit": "g"
//             },
//             "CHOCDF": {
//                 "label": "Carbs",
//                 "quantity": 290.1309833883986,
//                 "unit": "g"
//             },
//             "CHOCDF.net": {
//                 "label": "Carbohydrates (net)",
//                 "quantity": 270.6071833883986,
//                 "unit": "g"
//             },
//             "FIBTG": {
//                 "label": "Fiber",
//                 "quantity": 19.5238,
//                 "unit": "g"
//             },
//             "SUGAR": {
//                 "label": "Sugars",
//                 "quantity": 45.91243877321094,
//                 "unit": "g"
//             },
//             "PROCNT": {
//                 "label": "Protein",
//                 "quantity": 139.55691784863654,
//                 "unit": "g"
//             },
//             "CHOLE": {
//                 "label": "Cholesterol",
//                 "quantity": 618.0062153924969,
//                 "unit": "mg"
//             },
//             "NA": {
//                 "label": "Sodium",
//                 "quantity": 2473.9347261877365,
//                 "unit": "mg"
//             },
//             "CA": {
//                 "label": "Calcium",
//                 "quantity": 3394.3042339352146,
//                 "unit": "mg"
//             },
//             "MG": {
//                 "label": "Magnesium",
//                 "quantity": 953.2862153924968,
//                 "unit": "mg"
//             },
//             "K": {
//                 "label": "Potassium",
//                 "quantity": 6700.556043180959,
//                 "unit": "mg"
//             },
//             "FE": {
//                 "label": "Iron",
//                 "quantity": 33.97531864617749,
//                 "unit": "mg"
//             },
//             "ZN": {
//                 "label": "Zinc",
//                 "quantity": 15.240929969522384,
//                 "unit": "mg"
//             },
//             "P": {
//                 "label": "Phosphorus",
//                 "quantity": 2651.7902092969744,
//                 "unit": "mg"
//             },
//             "VITA_RAE": {
//                 "label": "Vitamin A",
//                 "quantity": 5101.2825908054865,
//                 "unit": "µg"
//             },
//             "VITC": {
//                 "label": "Vitamin C",
//                 "quantity": 225.139,
//                 "unit": "mg"
//             },
//             "THIA": {
//                 "label": "Thiamin (B1)",
//                 "quantity": 3.2540025908054853,
//                 "unit": "mg"
//             },
//             "RIBF": {
//                 "label": "Riboflavin (B2)",
//                 "quantity": 5.198821040133198,
//                 "unit": "mg"
//             },
//             "NIA": {
//                 "label": "Niacin (B3)",
//                 "quantity": 17.81370531699322,
//                 "unit": "mg"
//             },
//             "VITB6A": {
//                 "label": "Vitamin B6",
//                 "quantity": 2.4587623754129893,
//                 "unit": "mg"
//             },
//             "FOLDFE": {
//                 "label": "Folate equivalent (total)",
//                 "quantity": 2477.9531076962485,
//                 "unit": "µg"
//             },
//             "FOLFD": {
//                 "label": "Folate (food)",
//                 "quantity": 1691.9531076962485,
//                 "unit": "µg"
//             },
//             "FOLAC": {
//                 "label": "Folic acid",
//                 "quantity": 462.0,
//                 "unit": "µg"
//             },
//             "VITB12": {
//                 "label": "Vitamin B12",
//                 "quantity": 7.661779692662361,
//                 "unit": "µg"
//             },
//             "VITD": {
//                 "label": "Vitamin D",
//                 "quantity": 11.625808001024598,
//                 "unit": "µg"
//             },
//             "TOCPHA": {
//                 "label": "Vitamin E",
//                 "quantity": 18.911543507747474,
//                 "unit": "mg"
//             },
//             "VITK1": {
//                 "label": "Vitamin K",
//                 "quantity": 3875.4251864617745,
//                 "unit": "µg"
//             },
//             "WATER": {
//                 "label": "Water",
//                 "quantity": 1745.926997607898,
//                 "unit": "g"
//             }
//         },
//         "totalDaily": {
//             "ENERC_KCAL": {
//                 "label": "Energy",
//                 "quantity": 146.97829569471156,
//                 "unit": "%"
//             },
//             "FAT": {
//                 "label": "Fat",
//                 "quantity": 215.80104615778694,
//                 "unit": "%"
//             },
//             "FASAT": {
//                 "label": "Saturated",
//                 "quantity": 402.16668031502206,
//                 "unit": "%"
//             },
//             "CHOCDF": {
//                 "label": "Carbs",
//                 "quantity": 96.71032779613287,
//                 "unit": "%"
//             },
//             "FIBTG": {
//                 "label": "Fiber",
//                 "quantity": 78.0952,
//                 "unit": "%"
//             },
//             "PROCNT": {
//                 "label": "Protein",
//                 "quantity": 279.1138356972731,
//                 "unit": "%"
//             },
//             "CHOLE": {
//                 "label": "Cholesterol",
//                 "quantity": 206.00207179749896,
//                 "unit": "%"
//             },
//             "NA": {
//                 "label": "Sodium",
//                 "quantity": 103.08061359115568,
//                 "unit": "%"
//             },
//             "CA": {
//                 "label": "Calcium",
//                 "quantity": 339.43042339352144,
//                 "unit": "%"
//             },
//             "MG": {
//                 "label": "Magnesium",
//                 "quantity": 226.97290842678495,
//                 "unit": "%"
//             },
//             "K": {
//                 "label": "Potassium",
//                 "quantity": 142.56502219533957,
//                 "unit": "%"
//             },
//             "FE": {
//                 "label": "Iron",
//                 "quantity": 188.75177025654162,
//                 "unit": "%"
//             },
//             "ZN": {
//                 "label": "Zinc",
//                 "quantity": 138.55390881383985,
//                 "unit": "%"
//             },
//             "P": {
//                 "label": "Phosphorus",
//                 "quantity": 378.82717275671064,
//                 "unit": "%"
//             },
//             "VITA_RAE": {
//                 "label": "Vitamin A",
//                 "quantity": 566.8091767561651,
//                 "unit": "%"
//             },
//             "VITC": {
//                 "label": "Vitamin C",
//                 "quantity": 250.15444444444447,
//                 "unit": "%"
//             },
//             "THIA": {
//                 "label": "Thiamin (B1)",
//                 "quantity": 271.1668825671238,
//                 "unit": "%"
//             },
//             "RIBF": {
//                 "label": "Riboflavin (B2)",
//                 "quantity": 399.90931077947675,
//                 "unit": "%"
//             },
//             "NIA": {
//                 "label": "Niacin (B3)",
//                 "quantity": 111.33565823120763,
//                 "unit": "%"
//             },
//             "VITB6A": {
//                 "label": "Vitamin B6",
//                 "quantity": 189.13556733946072,
//                 "unit": "%"
//             },
//             "FOLDFE": {
//                 "label": "Folate equivalent (total)",
//                 "quantity": 619.4882769240621,
//                 "unit": "%"
//             },
//             "VITB12": {
//                 "label": "Vitamin B12",
//                 "quantity": 319.2408205275984,
//                 "unit": "%"
//             },
//             "VITD": {
//                 "label": "Vitamin D",
//                 "quantity": 77.50538667349731,
//                 "unit": "%"
//             },
//             "TOCPHA": {
//                 "label": "Vitamin E",
//                 "quantity": 126.0769567183165,
//                 "unit": "%"
//             },
//             "VITK1": {
//                 "label": "Vitamin K",
//                 "quantity": 3229.5209887181454,
//                 "unit": "%"
//             }
//         },
//         "digest": [
//             {
//                 "label": "Fat",
//                 "tag": "FAT",
//                 "schemaOrgTag": "fatContent",
//                 "total": 140.2706800025615,
//                 "hasRDI": true,
//                 "daily": 215.80104615778694,
//                 "unit": "g",
//                 "sub": [
//                     {
//                         "label": "Saturated",
//                         "tag": "FASAT",
//                         "schemaOrgTag": "saturatedFatContent",
//                         "total": 80.43333606300442,
//                         "hasRDI": true,
//                         "daily": 402.16668031502206,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Trans",
//                         "tag": "FATRN",
//                         "schemaOrgTag": "transFatContent",
//                         "total": 0.666,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Monounsaturated",
//                         "tag": "FAMS",
//                         "schemaOrgTag": null,
//                         "total": 36.93024468987075,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Polyunsaturated",
//                         "tag": "FAPU",
//                         "schemaOrgTag": null,
//                         "total": 9.548111200153688,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     }
//                 ]
//             },
//             {
//                 "label": "Carbs",
//                 "tag": "CHOCDF",
//                 "schemaOrgTag": "carbohydrateContent",
//                 "total": 290.1309833883986,
//                 "hasRDI": true,
//                 "daily": 96.71032779613287,
//                 "unit": "g",
//                 "sub": [
//                     {
//                         "label": "Carbs (net)",
//                         "tag": "CHOCDF.net",
//                         "schemaOrgTag": null,
//                         "total": 270.6071833883986,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Fiber",
//                         "tag": "FIBTG",
//                         "schemaOrgTag": "fiberContent",
//                         "total": 19.5238,
//                         "hasRDI": true,
//                         "daily": 78.0952,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Sugars",
//                         "tag": "SUGAR",
//                         "schemaOrgTag": "sugarContent",
//                         "total": 45.91243877321094,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Sugars, added",
//                         "tag": "SUGAR.added",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     }
//                 ]
//             },
//             {
//                 "label": "Protein",
//                 "tag": "PROCNT",
//                 "schemaOrgTag": "proteinContent",
//                 "total": 139.55691784863654,
//                 "hasRDI": true,
//                 "daily": 279.1138356972731,
//                 "unit": "g"
//             },
//             {
//                 "label": "Cholesterol",
//                 "tag": "CHOLE",
//                 "schemaOrgTag": "cholesterolContent",
//                 "total": 618.0062153924969,
//                 "hasRDI": true,
//                 "daily": 206.00207179749896,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Sodium",
//                 "tag": "NA",
//                 "schemaOrgTag": "sodiumContent",
//                 "total": 2473.9347261877365,
//                 "hasRDI": true,
//                 "daily": 103.08061359115568,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Calcium",
//                 "tag": "CA",
//                 "schemaOrgTag": null,
//                 "total": 3394.3042339352146,
//                 "hasRDI": true,
//                 "daily": 339.43042339352144,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Magnesium",
//                 "tag": "MG",
//                 "schemaOrgTag": null,
//                 "total": 953.2862153924968,
//                 "hasRDI": true,
//                 "daily": 226.97290842678495,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Potassium",
//                 "tag": "K",
//                 "schemaOrgTag": null,
//                 "total": 6700.556043180959,
//                 "hasRDI": true,
//                 "daily": 142.56502219533957,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Iron",
//                 "tag": "FE",
//                 "schemaOrgTag": null,
//                 "total": 33.97531864617749,
//                 "hasRDI": true,
//                 "daily": 188.75177025654162,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Zinc",
//                 "tag": "ZN",
//                 "schemaOrgTag": null,
//                 "total": 15.240929969522384,
//                 "hasRDI": true,
//                 "daily": 138.55390881383985,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Phosphorus",
//                 "tag": "P",
//                 "schemaOrgTag": null,
//                 "total": 2651.7902092969744,
//                 "hasRDI": true,
//                 "daily": 378.82717275671064,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Vitamin A",
//                 "tag": "VITA_RAE",
//                 "schemaOrgTag": null,
//                 "total": 5101.2825908054865,
//                 "hasRDI": true,
//                 "daily": 566.8091767561651,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Vitamin C",
//                 "tag": "VITC",
//                 "schemaOrgTag": null,
//                 "total": 225.139,
//                 "hasRDI": true,
//                 "daily": 250.15444444444447,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Thiamin (B1)",
//                 "tag": "THIA",
//                 "schemaOrgTag": null,
//                 "total": 3.2540025908054853,
//                 "hasRDI": true,
//                 "daily": 271.1668825671238,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Riboflavin (B2)",
//                 "tag": "RIBF",
//                 "schemaOrgTag": null,
//                 "total": 5.198821040133198,
//                 "hasRDI": true,
//                 "daily": 399.90931077947675,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Niacin (B3)",
//                 "tag": "NIA",
//                 "schemaOrgTag": null,
//                 "total": 17.81370531699322,
//                 "hasRDI": true,
//                 "daily": 111.33565823120763,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Vitamin B6",
//                 "tag": "VITB6A",
//                 "schemaOrgTag": null,
//                 "total": 2.4587623754129893,
//                 "hasRDI": true,
//                 "daily": 189.13556733946072,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Folate equivalent (total)",
//                 "tag": "FOLDFE",
//                 "schemaOrgTag": null,
//                 "total": 2477.9531076962485,
//                 "hasRDI": true,
//                 "daily": 619.4882769240621,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Folate (food)",
//                 "tag": "FOLFD",
//                 "schemaOrgTag": null,
//                 "total": 1691.9531076962485,
//                 "hasRDI": false,
//                 "daily": 0.0,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Folic acid",
//                 "tag": "FOLAC",
//                 "schemaOrgTag": null,
//                 "total": 462.0,
//                 "hasRDI": false,
//                 "daily": 0.0,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Vitamin B12",
//                 "tag": "VITB12",
//                 "schemaOrgTag": null,
//                 "total": 7.661779692662361,
//                 "hasRDI": true,
//                 "daily": 319.2408205275984,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Vitamin D",
//                 "tag": "VITD",
//                 "schemaOrgTag": null,
//                 "total": 11.625808001024598,
//                 "hasRDI": true,
//                 "daily": 77.50538667349731,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Vitamin E",
//                 "tag": "TOCPHA",
//                 "schemaOrgTag": null,
//                 "total": 18.911543507747474,
//                 "hasRDI": true,
//                 "daily": 126.0769567183165,
//                 "unit": "mg"
//             },
//             {
//                 "label": "Vitamin K",
//                 "tag": "VITK1",
//                 "schemaOrgTag": null,
//                 "total": 3875.4251864617745,
//                 "hasRDI": true,
//                 "daily": 3229.5209887181454,
//                 "unit": "µg"
//             },
//             {
//                 "label": "Sugar alcohols",
//                 "tag": "Sugar.alcohol",
//                 "schemaOrgTag": null,
//                 "total": 0.0,
//                 "hasRDI": false,
//                 "daily": 0.0,
//                 "unit": "g"
//             },
//             {
//                 "label": "Water",
//                 "tag": "WATER",
//                 "schemaOrgTag": null,
//                 "total": 1745.926997607898,
//                 "hasRDI": false,
//                 "daily": 0.0,
//                 "unit": "g"
//             }
//         ],
//         "tags": [
//             "Vegetarian",
//             "Pasta",
//             "Jamie Magazine"
//         ]
//     },
//     "_links": {
//         "self": {
//             "href": "https://api.edamam.com/api/recipes/v2/0f6199b0c6a6283e57cf42056aaf6f1f?type=public&app_id=d00fa156&app_key=678f4f218ea9270187157dc256f6f27f",
//             "title": "Self"
//         }
//     }
// },

const RecipeDialog = ({ open, handleClickOpen, handleClose, recipe }) => {
    return (
        <>
            <Button onClick={handleClickOpen} variant="contained">Show details</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ width: '100%' }} />
                    <Typography variant="body2" color="text.secondary" mb={1}>
                        {recipe.recipe.source}
                    </Typography>
                    <Typography variant="h5" color="text.primary" mb={1}>
                        {recipe.recipe.label}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
                        <Typography variant="body1" color="text.primary">
                            {recipe.recipe.calories?.toFixed(0)} kcal
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ingredients: {recipe.recipe.ingredientLines.length}
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="text.primary" mb={1}>
                        {recipe.recipe.ingredientLines.map(ingredient => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </Typography>
                    <a href={recipe.recipe.url} target="_blank" rel="noreferrer"><Link>Click here for detailed recipe</Link></a>
                    <Typography variant="body1" color="text.secondary" mb={1} mt={1}>
                        Diet: {recipe.recipe.dietLabels.join(', ')}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={1}>
                        Cautions: {recipe.recipe.cautions.join(', ')}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={1}>
                        Cuisine: {recipe.recipe.cuisineType.join(', ')}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={1}>
                        Meal: {recipe.recipe.mealType.join(', ')}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={1}>
                        Dish: {recipe.recipe.dishType.join(', ')}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={1}>
                        Total time: {recipe.recipe.totalTime} minutes
                    </Typography>
                    {recipe.recipe.totalCO2Emissions !== null && recipe.recipe.totalCO2Emissions !== undefined &&
                    <Typography variant="body1" color="text.secondary" mb={1}>
                    CO2 Emissions: {Number(recipe.recipe.totalCO2Emissions)?.toFixed(0)} g
                    </Typography>
                    }
                    <Typography variant="body1" color="text.secondary" mb={1}>
                        CO2 Emissions class: {recipe.recipe.co2EmissionsClass}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={1}>
                        Total weight: {recipe.recipe.totalWeight?.toFixed(0)} g
                    </Typography>

                    <Typography variant="h6" color="text.secondary" mb={1}>
                        Tags:
                    </Typography>
                    {recipe.recipe.healthLabels.map(healthLabel => (
                        <Chip sx={{ m: 1 }} key={healthLabel} label={healthLabel} />
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>

    );

};

export default RecipeDialog;