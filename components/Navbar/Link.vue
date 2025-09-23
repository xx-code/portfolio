<script setup lang="ts">

const {link, active, icon, text} = defineProps<{
    link: string,
    active: boolean,
    icon: string,
    text: string
}>();

</script>

<template>
    <li class="navlink">
        <a :href="link">
            <div class="navlink-wrapper">
                <UIcon class='icon' :name="icon" />
                <p>{{ text }}</p>
            </div>
        </a>
    </li>
</template>

<style lang="scss" scoped>
    .navlink {
        padding-inline: 10px;
        a {
            text-decoration: none;
            .navlink-wrapper {
                text-align: center;
                color: #626262;
                transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 400ms;
                .icon {
                    font-size: 32px;
                    display: none;
                }
                p {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    transition: font-size cubic-bezier(0.19, 1, 0.22, 1) 150ms;
                    margin: 0;
                    text-transform: uppercase;
                }
                &:hover {
                    color: #0C83FD;
                    p {
                        font-size: 14px;
                    }
                }   
            }
            .active {
                color: #0C83FD !important;
                p {
                    font-size: 12px;
                }
            }
        }
       
    }
</style>