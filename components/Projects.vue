<template>
    <div class="space-y-2 flex flex-col md:flex-row-reverse md:space-y-0 md:space-x-2">
        <div class="container md:w-1/3 flex md:justify-end">
            <ul class="flex space-x-2">
                <li>
                    <div class="badge badge-primary">primary</div>
                </li>
                <li>
                    <div class="badge badge-primary">primary</div>
                </li>
                <li>
                    <div class="badge badge-primary">primary</div>
                </li>
            </ul>
        </div>
        <div class="container md:w-2/3">
            <div class="card bg-base-200 border-2 border-neutral">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary btn-circle">
                            <Icon name="mdi:open-in-new" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style></style>