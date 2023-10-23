export default function AddImage (categories) {
    const allRecipesObj = {name: "All Recipes (A-Z)", image: "https://imgs.search.brave.com/NDgHQ4gZK87w-h_1MfSofj3c_yfN8J589hrxpALsu_E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/ZWxpY2lvdXMtZm9v/ZC1ncm91cHMtYXJy/YW5nZW1lbnRfMjMt/MjE0OTIzNTgxNi5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"}
    let arr = [];
    let obj = categories.meals.map(cat => {
        const obj = {
            _id: cat.idMeal,
            name: cat.strCategory,
            image: ""
        }
        switch (cat.strCategory) {
            case "Beef":
                obj.image = "https://imgs.search.brave.com/__GGU4f6laDkvmdPp2IAStLeejQB8ordagsT5gSlrZo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODQ5/MzYwNzgyL3Bob3Rv/L2Nvb2tpbmctYmVl/Zi1zdGVhay1maWxs/ZXRzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1kUmt5UXBt/UTlfTXRyVV9USzZG/djQxb0pLUUZ5MTlW/c2UtQmNEekwtMGww/PQ"
                return obj;    
            case "Chicken":
                obj.image = "https://imgs.search.brave.com/ujIKMC2W0T0Rv_VMKGL9vz1dzTcs3eotK75gbW-ptjw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzExLzQ5Lzk0/LzM2MF9GXzYxMTQ5/OTQ1Nl85TEhGTnph/aUdPUFUwY01UQWlS/c21CbXRnTnNOYjBi/WS5qcGc"
                return obj;
            case "Breakfast":
                obj.image = "https://imgs.search.brave.com/1OTSN5J4HZ7lNj-zy50GXU_L9pzm97et8GlcpcVderc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/NDUxOTI5L3Bob3Rv/L2JyZWFrZmFzdC1m/b29kcy1hbmQtZHJp/bmtzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1Kako2eGx4/anpDcmN1UHoydFht/RVZINF9KZFhsSkdh/Y1VrOG5vblFPMU84/PQ"
                return obj;
            case "Miscellaneous":
                obj.image = "https://imgs.search.brave.com/P2iwCfiBAJTpApYBHRRlazxM5JyG3rsrUVypsJg0oPA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzU3Lzg0Lzkw/LzM2MF9GXzU3ODQ5/MDgyX1RaYTdxOGxJ/UktYQ2dKcXNpdTRw/MDlwbU44RmtQMklp/LmpwZw"
                return obj;
            case "Dessert":
                obj.image = "https://imgs.search.brave.com/1R1g8yuyyPvR9xENs-CeoKmHa3TzkJ7L7NIdMWsIJDU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzc2LzU0LzA4/LzM2MF9GXzE3NjU0/MDgxMV92OW9Mb0U5/YW1TN3hXMVE0aWN6/UGxlRkVQUXk0SFNI/Mi5qcGc"
                return obj;
            case "Pasta":
                obj.image = "https://imgs.search.brave.com/rkEjyFpQCPY-ZBD_zmy4DBObn98mvWy0lxabFkqDbLA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM4/MTUyOTQyL3Bob3Rv/L3NwcmluZy1wYXN0/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9T2NBQTEzcDds/VnVjdVhWYl9KaWk0/bFBWUDdJbGdGdFJR/cF9OcnV1b0ZTND0"
                return obj;
            case "Seafood":
                obj.image = "https://imgs.search.brave.com/bD8303FhiqmQeDt84amDaO_AIFZhPnD8QxoFVmFvYxE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/MjcyMTA5L3Bob3Rv/L2hlYWx0aHktc2Vh/Zm9vZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NmNKeFZK/b3hwLXB1TmpsdEx3/WW5DNVM2Mm1vbDBY/b0FyeEJWNTB2cERt/bz0"
                return obj;
            case "Pork":
                obj.image = "https://imgs.search.brave.com/6aRdXuojAdgZMM-YeRpPtOCyaJggJ09dt4PFiAos9Z8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA5/Mzk1MDI1MC9waG90/by9yb2FzdGVkLXNo/b3VsZGVyLW9mLXBv/cmsuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPW5IZXg3bExf/VWlHem9xSTRYNXBI/SkZLNlU5VEo5dEZ6/WVBmckRwbHdRY3M9"
                return obj;
            case "Goat":
                obj.image = "https://imgs.search.brave.com/FEPO6ilCpRlaT6dbsm3rzEWDYd_PDmy02z6PSENy3rM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcG9zdC5o/ZWFsdGhsaW5lLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMi9nb2F0LW1l/YXQtc3Rldy0xMjk2/LTcyOC1oZWFkZXIu/anBnP3c9MTE1NSZo/PTE1Mjg"
                return obj;
            case "Lamb":
                obj.image = "https://imgs.search.brave.com/I4DtaLqJ5OlIqZlNa8blldAM_WmOznvfzS-1IPonuuU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9sYW1i/LXJlY2lwZXMtNjQw/N2E2NzYxZDBiOC5q/cGVnP2Nyb3A9MC45/OTh4dzoxLjAweGg7/MC4wMDE2MHh3LDAm/cmVzaXplPTY0MDoq"
                return obj;
            case "Side":
                obj.image = "https://imgs.search.brave.com/rolXwIMcK4CKGttM1IvMdN4K7SRq6ezwD5VksbFAVx8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/OTIwMTY4NS9waG90/by9zaWRlLWRpc2hl/cy1pbi12YXJpb3Vz/LXBhY2tzLW9uLXRo/ZS10YWJsZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9aTBR/VVBva0lhQ3lNU1Y3/ZE1mRzlrVGFtaTd2/SGFwb0U2QXZteVFE/eFF6TT0"
                return obj;
            case "Starter":
                obj.image = "https://imgs.search.brave.com/vCe_6EpN-0IFjexViFywdKdvdN8VCGXhp7b_hnKX-tM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UwL2Q4/L2E3L2UwZDhhNzZm/ZGVlYTIwNzhkMmI2/NmI2MmIyODAyNWU2/LS1jaHJpc3RtYXMt/bWVudXMtY2hyaXN0/bWFzLS5qcGc"
                return obj;
            case "Vegan":
                obj.image = "https://imgs.search.brave.com/7qwdn1VvxdZsffydDbIbFIfQctdqf9HnL7IsrH_RbdA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTU0/Njg5NjcvcGhvdG8v/YXNzb3J0ZWQtdG9m/dS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RTY5U0FSWjNU/ZE91MDQ1SWtTRzQ4/QUsxNTBVRmhLNzJB/NnNCQW9YWmduND0"
                return obj;
            case "Vegetarian":
                obj.image = "https://imgs.search.brave.com/tMhvUoL5_gIaYqXa8SyN2-JTGAZKSbBAGqImssi8kCk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/MTU1MTcxMC9waG90/by9qYXBhbmVzZS13/b21hbi1lYXRpbmct/YS12ZWdhbi1sdW5j/aC1hdC1hLXZlZ2Fu/LWNhZmUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXFDdW1z/bTBqOVFwYldXRVY4/OTBJcV9YZmVteEhR/MWlENmdDTTBycG9R/VGs9"
                return obj;
            default:
                break
            }
            return obj;
    });

    arr.push(allRecipesObj, ...obj)
    return arr;
}