<script setup>
</script>

<template>
    <div id="home" class="">
        <div class="flex">
            <div class="content-right">
                <HomeWelcome />
            </div>
        </div>  
    </div>
</template>

<style lang="scss" scoped>
    #home {
    background-color: #0E0E10;
    transition: opacity ease-in-out 100ms;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .content-left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 12px;
    }
    .btn-wrapper {
        margin-top: 34px;
        .contact-btn {
            border: 1px solid #0C83FD;
            &:hover {
                border-color: #626262;
                color: #626262;
            }
        }
    } 
}
</style>