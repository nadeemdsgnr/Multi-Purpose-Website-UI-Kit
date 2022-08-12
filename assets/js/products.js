var productListAllData = [
    {
        id: 1,
        product: {
            img: "assets/images/products/img-1.png",
            title: "Half Sleeve Round Neck T-Shirts",
            category: "Fashion"
        },
        stock: "12",
        price: "215.00",
        orders: "48",
        rating: "4.2",
        published: {
            publishDate: "12 Oct, 2021",
            publishTime: "10:05 AM"
        }
    }, 
    {
        id: 2,
        product: {
            img: "assets/images/products/img-2.png",
            title: "Urban Ladder Pashe Chair",
            category: "Furniture"
        },
        stock: "06",
        price: "160.00",
        orders: "30",
        rating: "4.3",
        published: {
            publishDate: "06 Jan, 2021",
            publishTime: "01:31 PM"
        }
    }, 
    {
        id: 3,
        product: {
            img: "assets/images/products/img-3.png",
            title: "350 ml Glass Grocery Container",
            category: "Grocery"
        },
        stock: "10",
        price: "125.00",
        orders: "48",
        rating: "4.5",
        published: {
            publishDate: "26 Mar, 2021",
            publishTime: "11:40 AM"
        }
    }, 
    {
        id: 4,
        product: {
            img: "assets/images/products/img-4.png",
            title: "Fabric Dual Tone Living Room Chair",
            category: "Furniture"
        },
        stock: "15",
        price: "340.00",
        orders: "40",
        rating: "4.2",
        published: {
            publishDate: "19 Apr, 2021",
            publishTime: "02:51 PM"
        }
    }, 
    {
        id: 5,
        product: {
            img: "assets/images/products/img-5.png",
            title: "Crux Motorsports Helmet",
            category: "Automotive Accessories"
        },
        stock: "08",
        price: "175.00",
        orders: "55",
        rating: "4.4",
        published: {
            publishDate: "30 Mar, 2021",
            publishTime: "09:42 AM"
        }
    }, 
    {
        id: 6,
        product: {
            img: "assets/images/products/img-6.png",
            title: "Half Sleeve T-Shirts (Blue)",
            category: "Fashion"
        },
        stock: "15",
        price: "225.00",
        orders: "48",
        rating: "4.2",
        published: {
            publishDate: "12 Oct, 2021",
            publishTime: "04:55 PM"
        }
    }, 
    {
        id: 7,
        product: {
            img: "assets/images/products/img-7.png",
            title: "Noise Evolve Smartwatch",
            category: "Watches"
        },
        stock: "12",
        price: "105.00",
        orders: "45",
        rating: "4.3",
        published: {
            publishDate: "15 May, 2021",
            publishTime: "03:40 PM"
        }
    }, 
    {
        id: 8,
        product: {
            img: "assets/images/products/img-8.png",
            title: "Sweatshirt for Men (Pink)",
            category: "Fashion"
        },
        stock: "20",
        price: "120.00",
        orders: "48",
        rating: "4.2",
        published: {
            publishDate: "21 Jun, 2021",
            publishTime: "12:18 PM"
        }
    }, 
    {
        id: 9,
        product: {
            img: "assets/images/products/img-9.png",
            title: "Reusable Ecological Coffee Cup",
            category: "Grocery"
        },
        stock: "14",
        price: "325.00",
        orders: "55",
        rating: "4.3",
        published: {
            publishDate: "15 Jan, 2021",
            publishTime: "10:29 PM"
        }
    }, 
    {
        id: 10,
        product: {
            img: "assets/images/products/img-10.png",
            title: "Travel Carrying Pouch Bag",
            category: "Kids"
        },
        stock: "20",
        price: "180.00",
        orders: "60",
        rating: "4.3",
        published: {
            publishDate: "15 Jun, 2021",
            publishTime: "03:51 PM"
        }
    }, 
    {
        id: 11,
        product: {
            img: "assets/images/products/img-1.png",
            title: "Half Sleeve Round Neck T-Shirts",
            category: "Fashion"
        },
        stock: "12",
        price: "215.00",
        orders: "48",
        rating: "4.2",
        published: {
            publishDate: "12 Oct, 2021",
            publishTime: "10:05 AM"
        }
    }, 
    {
        id: 12,
        product: {
            img: "assets/images/products/img-2.png",
            title: "Urban Ladder Pashe Chair",
            category: "Furniture"
        },
        stock: "06",
        price: "160.00",
        orders: "30",
        rating: "4.3",
        published: {
            publishDate: "06 Jan, 2021",
            publishTime: "01:31 PM"
        }
    }
],
inputValueJson = sessionStorage.getItem("inputValue");
inputValueJson && (inputValueJson = JSON.parse(inputValueJson), Array.from(inputValueJson).forEach(e => {
    productListAllData.unshift(e)
}));
var editinputValueJson = sessionStorage.getItem("editInputValue");
editinputValueJson && (editinputValueJson = JSON.parse(editinputValueJson),
productListAllData = productListAllData.map(function(e) {
    return e.id == editinputValueJson.id ? editinputValueJson : e
})), 
document.getElementById("addproduct-btn").addEventListener("click", function() {
    sessionStorage.setItem("editInputValue", "")
});
var productListAll = new gridjs.Grid({
    columns: [
        {
            name: "#",
            width: "40px",
            sort: {
                enabled: !1
            },
            data: function(e) {
                return gridjs.html('<div class="form-check checkbox-product-list">\t\t\t\t\t<input class="form-check-input" type="checkbox" value="' + e.id + '" id="checkbox-' + e.id + '">\t\t\t\t\t<label class="form-check-label" for="checkbox-' + e.id + '"></label>\t\t\t\t  </div>')
            }
        }, 
        {
            name: "Product",
            width: "380px",
            data: function(e) {
                return gridjs.html('<div class="d-flex align-items-center"><div class="flex-shrink-0 me-3"><div class="avatar-sm bg-light rounded p-1"><img src="' + e.product.img + '" alt="" class="img-fluid d-block"></div></div><div class="flex-grow-1"><h5 class="fs-s mb-1 fw-normal"><a href="product-details.html" class="text-dark text-decoration-none">' + e.product.title + '</a></h5><p class="text-muted mb-0">Category : <span class="fw-normal">' + e.product.category + "</span></p></div></div>")
            }
        }, 
        {
            name: "Stock",
            width: "101px"
        }, 
        {
            name: "Price",
            width: "101px",
            formatter: function(e) {
                return gridjs.html("$" + e)
            }
        }, 
        {
            name: "Orders",
            width: "101px"
        }, 
        {
            name: "Rating",
            width: "105px",
            formatter: function(e) {
                return gridjs.html('<span class="badge bg-light text-body fs-s fw-normal"><i class="bx bxs-star text-warning me-1"></i>' + e + "</span></td>")
            }
        }, 
        {
            name: "Published",
            width: "220px",
            data: function(e) {
                return gridjs.html(e.published.publishDate + '<small class="text-muted ms-1">' + e.published.publishTime + "</small>")
            }
        }, 
        {
            name: "Action",
            width: "101px",
            sort: {
                enabled: !1
            },
            formatter: function(e, t) {
                t = (new DOMParser).parseFromString(t._cells[0].data.props.content, "text/html").body.querySelector(".checkbox-product-list .form-check-input").value;
                return gridjs.html('<div class="dropdown"><button class="btn btn-primary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bx bx-dots-horizontal-rounded"></i></button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item d-flex align-items-center" href="#"><i class="bx bxs-info-circle align-bottom me-2 text-muted"></i> View</a></li><li><a class="dropdown-item d-flex align-items-center edit-list" data-edit-id=' + t + ' href="#"><i class="bx bxs-pencil align-bottom me-2 text-muted"></i> Edit</a></li><li class="dropdown-divider"></li><li><a class="dropdown-item d-flex align-items-center remove-list" href="#" data-id=' + t + ' data-bs-toggle="modal" data-bs-target="#removeItemModal"><i class="bx bxs-trash align-bottom me-2 text-muted"></i> Delete</a></li></ul></div>')
            }
    }],
    className: {
        table: "w-100",
        th: "text-muted fs-xs",
        td: "fs-s fw-light text-dark"
    },
    style: { 
      table: { 
        'white-space': 'nowrap'
      }
    },
    pagination: {
        limit: 10
    },
    sort: !0,
    data: productListAllData
}).render(document.getElementById("tablegrid")),
productListPublishedData = [
    {
        id: 1,
        product: {
            img: "assets/images/products/img-2.png",
            title: "Urban Ladder Pashe Chair",
            category: "Furniture"
        },
        stock: "06",
        price: "160.00",
        orders: "30",
        rating: "4.3",
        published: {
            publishDate: "06 Jan, 2021",
            publishTime: "01:31 PM"
        }
    }, 
    {
        id: 2,
        product: {
            img: "assets/images/products/img-6.png",
            title: "Half Sleeve T-Shirts (Blue)",
            category: "Fashion"
        },
        stock: "15",
        price: "125.00",
        orders: "48",
        rating: "4.2",
        published: {
            publishDate: "12 Oct, 2021",
            publishTime: "04:55 PM"
        }
    }, 
    {
        id: 3,
        product: {
            img: "assets/images/products/img-4.png",
            title: "Fabric Dual Tone Living Room Chair",
            category: "Furniture"
        },
        stock: "15",
        price: "140.00",
        orders: "40",
        rating: "4.2",
        published: {
            publishDate: "19 Apr, 2021",
            publishTime: "02:51 PM"
        }
    }, 
    {
        id: 4,
        product: {
            img: "assets/images/products/img-4.png",
            title: "350 ml Glass Grocery Container",
            category: "Grocery"
        },
        stock: "10",
        price: "125.00",
        orders: "48",
        rating: "4.5",
        published: {
            publishDate: "26 Mar, 2021",
            publishTime: "11:40 AM"
        }
    }, 
    {
        id: 5,
        product: {
            img: "assets/images/products/img-5.png",
            title: "Crux Motorsports Helmet",
            category: "Automotive Accessories"
        },
        stock: "08",
        price: "135.00",
        orders: "55",
        rating: "4.4",
        published: {
            publishDate: "30 Mar, 2021",
            publishTime: "09:42 AM"
        }
    }
],
productListPublished = new gridjs.Grid({
    columns: [
        {
            name: "#",
            width: "40px",
            sort: {
                enabled: !1
            },
            formatter: function(e) {
                return gridjs.html('<div class="form-check checkbox-product-list">\t\t\t\t\t<input class="form-check-input" type="checkbox" value="' + e + '" id="checkboxpublished-' + e + '">\t\t\t\t\t<label class="form-check-label" for="checkbox-' + e + '"></label>\t\t\t\t  </div>')
            }
        }, 
        {
            name: "Product",
            width: "380px",
            data: function(e) {
                return gridjs.html('<div class="d-flex align-items-center"><div class="flex-shrink-0 me-3"><div class="avatar-sm bg-light rounded p-1"><img src="' + e.product.img + '" alt="" class="img-fluid d-block"></div></div><div class="flex-grow-1"><h5 class="fs-s mb-1 fw-normal"><a href="product-details.html" class="text-dark text-decoration-none">' + e.product.title + '</a></h5><p class="text-muted mb-0">Category : <span class="fw-normal">' + e.product.category + "</span></p></div></div>")
            }
        }, 
        {
            name: "Stock",
            width: "101px"
        }, 
        {
            name: "Price",
            width: "101px",
            formatter: function(e) {
                return gridjs.html("$" + e)
            }
        }, 
        {
            name: "Orders",
            width: "101px"
        }, 
        {
            name: "Rating",
            width: "105px",
            formatter: function(e) {
                return gridjs.html('<span class="badge bg-light text-body fw-normal fs-s"><i class="bx bxs-star text-warning me-1"></i>' + e + "</span></td>")
            }
        }, 
        {
            name: "Published",
            width: "220px",
            data: function(e) {
                return gridjs.html(e.published.publishDate + '<small class="text-muted ms-1">' + e.published.publishTime + "</small>")
            }
        }, 
        {
            name: "Action",
            width: "101px",
            sort: {
                enabled: !1
            },
            formatter: function(e, t) {
                return gridjs.html('<div class="dropdown"><button class="btn btn-primary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bx bx-dots-horizontal-rounded"></i></button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item d-flex align-items-center" href="#"><i class="bx bxs-info-circle align-bottom me-2 text-muted"></i> View</a></li><li><a class="dropdown-item d-flex align-items-center" href="#"><i class="bx bxs-pencil align-bottom me-2 text-muted"></i> Edit</a></li><li class="dropdown-divider"></li><li><a class="dropdown-item d-flex align-items-center remove-list" href="#" data-id=' + t._cells[0].data + ' data-bs-toggle="modal" data-bs-target="#removeItemModal"><i class="bx bxs-trash align-bottom me-2 text-muted"></i> Delete</a></li></ul></div>')
            }
    }],
    className: {
        table: "w-100",
        th: "text-muted fs-xs",
        td: "fs-s fw-light text-dark"
    },
    style: { 
      table: { 
        'white-space': 'nowrap'
      }
    },
    pagination: {
        limit: 10
    },
    sort: !0,
    data: productListPublishedData
}).render(document.getElementById("tablegridpublished"));
