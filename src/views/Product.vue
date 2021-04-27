<template>
  <div class="product">
    <header-shayna/>
     <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/">Home</router-link>
                        <span>Detail</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="product-big-img" :src="gambar_default" alt="" />
                            </div>
                            <div class="product-thumbs" v-if="productDetais.galleries.length > 0">
                                <carousel class="product-thumbs-track ps-slider" :margin="10" :dots="false" :nav="false" >
                                     
                                    <div v-for="(image, index) in productDetais.galleries" :key="index"
                                        class="pt" @click="changeImage(image.photo)" :class="image.photo == gambar_default ? 'active' : ''">
                                        <img :src="image.photo" alt="" />
                                    </div>                                   

                                </carousel>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details text-left">
                                <div class="pd-title">
                                    <span>{{ productDetais.type }}</span>
                                    <h3>{{ productDetais.name }}</h3>
                                </div>
                                <div class="pd-desc">
                                    <p>
                                       {{ productDetais.description }}
                                    </p>
                                    <h4>${{ productDetais.price }}</h4>
                                </div>
                                <div class="quantity">
                                    <router-link to="/cart" class="primary-btn pd-cart">Add To Cart</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->

    <related-shayna/>
    <footer-shayna/>
  </div>
</template>

<script>
import HeaderShayna from '@/components/HeaderShayna'
import FooterShayna from '@/components/FooterShayna'
import RelatedShayna from '@/components/RelatedShayna'
import carousel from 'vue-owl-carousel'
import axios from 'axios';

export default {
    name: 'product',
    components: {
        HeaderShayna,
        FooterShayna,
        carousel,
        RelatedShayna,
    },
    data() {
        return {
            gambar_default : "img/mickey1.jpg",
            thumbs : [
                "img/mickey1.jpg",
                "img/mickey2.jpg",
                "img/mickey3.jpg",
                "img/mickey4.jpg",
            ],
            productDetais: []
        }
    },
    methods: {
        changeImage(urlImage){
            this.gambar_default = urlImage;
        },
         setDataPicture(data){
            this.productDetais = data;
            this.gambar_default = data.galleries[0].photo;
        },
    },
    mounted() {
        axios
            .get("http://localhost:8000/api/products", {
                params: {
                    id: this.$route.params.id
                }
            })
            .then(res => (this.setDataPicture(res.data.data)))
            .catch(err => console.log(err));
    },
}
</script>
