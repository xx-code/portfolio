<script setup lang="ts">

</script>

<template>
    <div id="my-navbar">
        <div class="header flex" > 
            <NavbarLogo /> 
            <div class="navbar-items">
                <ul class="navbar-items-wrapper">
                    <NavbarLink 
                        :text="$t('Navbar.home')" 
                        icon="i-lucide-home"
                        link="#home"
                        :active="false"
                    />
                    <NavbarLink 
                        :text="$t('Navbar.about_me')"
                        icon="i-lucide"
                        link="#about-me" 
                        :active="false"
                    />
                    <NavbarLink 
                        :text="$t('Navbar.skills')"
                        icon="i-lucide"
                        link="#skills" 
                        :active="false"
                    />
                    <NavbarLink 
                        :text="$t('Navbar.projects')" 
                        icon="i-lucide-home"
                        link="#projects" 
                        :active="false"
                    />
                    <NavbarLink 
                        :text="$t('Navbar.contact')"
                        icon="i-lucide-home" 
                        link="#contact" 
                        :active="false"
                    />
                </ul>
            </div>

            <div class="hamburger-btn">
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #my-navbar {
        background-color: #0E0E10;
        width: 100%;
        position: fixed;
        z-index: 5;
        @media (max-width: 768px) {
            flex-direction: row;
            height: 70px;
            width: 100%;
            position: relative;
            top: 0;
        }
    }
    .header {
        display: flex;
        justify-content: space-between;
        z-index: 4;
    }
    
    .navbar-items {
        display: flex;
        align-items: center;
        flex-direction: row;
        @media (max-width: 768px) {
            display: none;
        }
        
    }
    .navbar-items-wrapper {
        display: flex;
        margin: 0;
        list-style-type: none;
    }

    .hamburger-btn {
        display: none;
        @media (max-width: 768px) {
            display: flex;
            align-items: center;
        }
    }

    .navbar-items-responsive {
        position: absolute;
        left: -15000px;
        z-index: -2;
        transition: left cubic-bezier(1, 0, 0, 1) 350ms;
        width: 100%;
        .navbar-items-wrapper {
            z-index: -2;
            list-style-type: none;
            display: flex;
            justify-content: space-around;
            background-color: #0E0E10;
            border-top: solid 1px #626262;
            padding: 10px 0;
        }
    }
</style>