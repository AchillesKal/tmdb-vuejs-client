<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            <h3>This is not the real TMDB!!!</h3>
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            Hey there :D
                            <p>This in <b>not</b> the real TMDB. This is just a Vue js app I made for fun.</p>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'Modal',
  };
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 450px;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #fff;
        background-image: radial-gradient(at 30% top, rgba(7, 64, 52, 1) 0%, rgba(8, 28, 36, 1) 70%);
        padding: 10px;
    }

    .modal-body {
        padding: 20px 20px 0 20px;
    }

    .modal-default-button {
        background-color: #073a31;
        padding: 10px 30px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        border-radius: 4px;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .modal-footer{
        padding: 20px 15px 20px;
        text-align: right;
    }
</style>