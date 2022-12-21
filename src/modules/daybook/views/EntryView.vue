<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">21</span>
            <span class="mx-1 fs-3">Diciembre</span>
            <span class="mx-2 fs-4 fw-light">2022, miercoles</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                 <i class="fa fa-trash-alt"></i>
            </button>
    
            
            <button class="btn btn-primary mx-2">
                Subir foto
                 <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que paso hoy?"></textarea>
    </div>

    <FabXd
        icon="fa-save"
    />

    <img 
        src="https://i.pinimg.com/originals/3b/30/a6/3b30a6dc01c5bea71383b2c74343ebe3.jpg"
        alt="entry-picture"
        class="img-thumbnail"
        >

</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        FabXd: defineAsyncComponent(()=> import('../components/FabXd.vue'))
    }
}
</script>
<style lang="scss" scoped>
    textarea{
        font-size: 20px;
        border: none;
        height: 100vh;

        &:focus{
            outline: none;
        }
    }

    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha:0.2);
    }
</style>