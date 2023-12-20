<template>
    <div class="t-h-screen t-bg-slate-100 t-grid t-grid-cols-[350px,1fr] t-overflow-hidden" >
        <div class="t-h-full t-bg-[#4078c0] t-overflow-auto t-px-5" >
            <div class="t t-sticky t-top-0 t-h-[80px] t-bg-[#4078c0] t-flex t-items-center" >
                <div>
                    Hello
                </div>
            </div>
            <div >
                <div class="t-bg-slate-100 t-h-[80px] t-rounded-[10px]" >
                    <div class="t-h-full t-grid t-grid-cols-[70px,1fr]" >
                        <div class="t-h-full t-grid t-place-content-center" >
                            <div class="t-h-[50px] t-w-[50px] t-bg-slate-300 t-rounded-[50%] t-relative" >
                                <span class="t-absolute t-bottom-0 t-right-0 t-h-[15px] t-w-[15px] t-bg-green-400 t-rounded-[50%]" ></span>
                            </div>
                        </div>
                        <div>
                            a
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="t-relative t-h-full t-overflow-hidden t-grid t-grid-rows-[80px,1fr,50px]" >
            <div class="t-flex t-items-center t-px-5" >
                <span >
                    <label class="t-text-[25px] t-font-extralight" >Juan Dela Cruz</label>
                </span>
            </div>
            <div class="t-h-full t-overflow-auto" >
                <div class="container" >
                    <div v-for="message in messages" :key="message.id" >
                        <div v-if="message.owner" class="t-mt-7 t-flex t-justify-end t-relative" >
                            <div class="t-bg-blue-300  t-h-auto t-w-[50%] t-p-2 t-rounded-[10px]" >
                                <p>{{ message.message }}</p>
                            </div>
                            <small class="text-muted t-absolute t-bottom-[-20px] t-right-0" >10:20AM/Dec 1 2022</small>
                        </div>
                        <div v-else class="t-mt-3" >
                            <div class="t-bg-slate-200  t-h-auto t-w-[50%] t-p-2 t-rounded-[10px]" >
                                <p>{{ message.message }}</p>
                            </div>
                            <small class="text-muted" >10:20AM/Dec 1 2022</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="t-bg-red-100 t-h-[50px] t-w-full t-flex t-items-center container" >
                <div class="t-grid t-grid-cols-[1fr,50px] t-w-full t-gap-3" >
                    <input type="text" class="form-control w-100" >
                    <span class="t-grid t-place-content-center" >
                        <fa icon="paper-plane" ></fa>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts" >
import { ref } from 'vue';

type messageType = {
    id: number,
    owner: boolean,
    message: string,
}

const messages = ref<messageType[]>([
    {
        id: 1,
        owner: true,
        message: "Hello MotherFucker"
    },
    {
        id: 2,
        owner: false,
        message: "Yes Nigga?"
    },
    {
        id: 1,
        owner: true,
        message: "Hello MotherFucker"
    },
    {
        id: 2,
        owner: false,
        message: "Yes Nigga?"
    },
    {
        id: 1,
        owner: true,
        message: "Hello MotherFucker"
    },
    {
        id: 2,
        owner: false,
        message: "Yes Nigga?"
    },
    {
        id: 1,
        owner: true,
        message: "Hello MotherFucker"
    },
    {
        id: 2,
        owner: false,
        message: "Yes Nigga?"
    },

    {
        id: 1,
        owner: true,
        message: "Hello MotherFucker"
    },
    {
        id: 2,
        owner: false,
        message: "Yes Nigga?"
    },
    {
        id: 1,
        owner: true,
        message: "Hello MotherFucker"
    },
    {
        id: 2,
        owner: false,
        message: "Yes Nigga?"
    },
    {
        id: 1,
        owner: true,
        message: "Hello MotherFucker"
    },
    {
        id: 2,
        owner: false,
        message: "Yes Nigga?"
    },
]);
</script>