export default function AddImage (categories) {
    let arr = []
    let obj = categories.meals.map(cat => {
        const obj = {
            name: cat.strCategory,
            image: ""
        }
        switch (cat.strCategory) {
            case "Beef":
                obj.image = "https://imgs.search.brave.com/1gZZpBn5hHVsovXU5-aOy3r2lR_JZ6nMBCLmnxFqBiw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9wZXJmZWN0LWJl/ZWYtc3RlYWstdmVy/dGljYWwuanBnP3c9/NjAwJnF1YWxpdHk9/ODA"
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
                obj.image = "https://imgs.search.brave.com/44JxvNoO2C4hl1NpNFKY-EApRWCmbNfZ8WFIRyEFwT4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzExL21hc2FsYS1w/YXN0YS5qcGcud2Vi/cA"
                return obj;
            case "Seafood":
                obj.image = "https://imgs.search.brave.com/bD8303FhiqmQeDt84amDaO_AIFZhPnD8QxoFVmFvYxE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/MjcyMTA5L3Bob3Rv/L2hlYWx0aHktc2Vh/Zm9vZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NmNKeFZK/b3hwLXB1TmpsdEx3/WW5DNVM2Mm1vbDBY/b0FyeEJWNTB2cERt/bz0"
                return obj;
            case "Pork":
                obj.image = "https://imgs.search.brave.com/9r4WcvHBSQmF5zfzBw4jFMiSCMU3g96vGn6dCQQAw4s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDcy/MTU2MzUxL3Bob3Rv/L3JvYXN0LXBvcmsu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW9OdUdzWFFoM21a/QTdySnhvN3FQdXhZ/Y2duQnJ5dUtwYVhT/bWlHYkhtQWM9"
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
            case "Stater":
                obj.image = "https://imgs.search.brave.com/MeJtPosM4ExGbmgfOCCbLtXy0Ly1Y6ql7-WHXWaAZqc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9kaW5u/ZXItcGFydHktc3Rh/cnRlcnMtMTYyNzM4/MTM4MC5qcGc_Y3Jv/cD0wLjMyN3h3OjAu/NjU1eGg7MC4zMzZ4/dywwLjMxOXhoJnJl/c2l6ZT02NDA6Kg"
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
    return arr.push(...obj)
}