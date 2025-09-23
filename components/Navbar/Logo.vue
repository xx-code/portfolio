<template>
    <div class="logo">
        <div class="wrapper-logo">
            <p class='logo-name-first'><span className='logo-name-first-high'>Au</span>guste</p>
            <p class='logo-name-last'>Tiem<span className='logo-name-last-high'>ele</span></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .logo {
        @media (max-width: 768px) {
            position: static;
        }
        .wrapper-logo {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            height: 100%;
            font-weight: 500;
            .logo-name-first {
                color:#0C83FD;
                .logo-name-first-high {
                    position: relative;
                    &:hover {
                        color:#ED1E79;
                        top: -5px;
                    }
                    // @include rotate-animation(500ms, 1) {
                    //     from { top: 0; }
                    //     to {top: -5px}
                    // }
                }
                margin-right: 5px;
            }
            .logo-name-last {
                color: #ED1E79;
                .logo-name-last-high {
                    position: relative;
                    &:hover {
                        color:#0C83FD;
                        top: -5px;
                    }
                    // @include rotate-animation(1000ms, 1) {
                    //     from { top: 0; }
                    //     to {top: -5px}
                    // }
                }
            }
        }
    }
</style>