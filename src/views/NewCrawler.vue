<template>
    <mainView>
        <div class="container">

            <form action="" @submit.prevent="">

                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>General Properties</h1>
                        <hr>
                    </div>
                    <div class=" edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Crawler Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                        </div>

                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Crawler Content</label>
                            <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder"></textarea>
                            <div class="textarea_info">Seperate text items in the scroller with line breaks.</div>
                        </div>
                        <div class="mb-3 col">
                            <div id="switch_one" class="switches-container ">
                                <div class="switch-info">Pause On Hover</div>
                                <div class="switch">
                                    <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                        inset></v-switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="hr_line">
                <!-- color picker -->
                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>Display Properties</h1>
                        <hr>
                    </div>
                    <!-- color -->
                    <div class="color-picker">
                        <div class="color-picker-title">Background Colour</div>
                        <div class="color-space">
                            <v-color-picker v-model="picker" elevation="0"></v-color-picker>
                        </div>

                    </div>
                </div>
                <hr id="hr_line">
                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>Font Properties</h1>
                        <hr>
                    </div>
                    <!-- form -->
                    <div class="d-flex edit-group w-100 mb-4">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Font</label>
                            <select type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                                <option value=""></option>
                            </select>
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Font Size</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                        </div>

                    </div>
                    <!-- color -->
                    <div class="color-picker">
                        <div class="color-picker-title">Background Colour</div>
                        <div class="color-space">
                            <v-color-picker v-model="picker" elevation="0"></v-color-picker>
                        </div>

                    </div>
                </div>


                <!-- Include Crawler -->
                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>Crawler Timing</h1>
                        <hr>
                    </div>
                    <div class="d-flex edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Duration</label>
                            <select type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                                <option value=""></option>
                            </select>
                            <div class="textarea_info">Entire scroll duration in milliseconds.</div>

                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Delay Before Start</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                            <div class="textarea_info">Start delay time in milliseconds</div>

                        </div>

                    </div>
                </div>
                <div class="btn-container d-flex justify-center w-100"> <button class="add w-50" type="button">Add Crawler</button>
                </div>
            </form>

        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'

export default {
    name: 'NewPackage',
    components: {
        mainView
    },
    data() {
        return {
            picker: null,
            ex11: ['indigo-darken-3'],
        }
    },


}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/form.scss';

.container {
    padding: calculate-value(52px);
}

form {
    align-items: flex-start;

    .package-name {
        width: 100%;
        margin-top: 36px;
    }
}

#switch_one {
    margin-top: 45px;
}

.switch-text {
    @include textStyles('Poppins', 300, 14px, 21px);
    letter-spacing: -0.01em;
    color: rgba(0, 0, 0, 0.71);
    align-self: center;


}

#hr_line {

    border-color: #E8E9EA;
    border-width: 3px;
    margin-block: 45px;
    width: 100%;
    opacity: 1;
}

.general-properties {
    margin-bottom: 33px;

    h1 {
        @include textStyles('Poppins', 600, 18px, 27px);
        letter-spacing: -0.01em;
        color: rgba(0, 0, 0, 0.71);
    }

    hr {
        border-top: 3px solid;
        width: 20%;
    }
}

.color-picker {
    display: flex;
    gap: 16px;
}

.color-picker-title {
    @include textStyles('Poppins', 500, 14px, 24px);
    color: #282828;
    text-transform: capitalize;


}

.switches-container {
    width: calculate-value(202px);
    height: 64px;
    padding: 18px 13px;
    display: flex;
    background: rgba(95, 65, 162, 0.13);
    border-radius: 15px;
    justify-content: space-around;
    align-items: center;
}

.switch {
    height: auto;
}

.package-name.switches,
.auto-switches {
    display: flex;
    gap: 17px;
}

.row-2 {
    margin-top: 40px;
}

.grouping-info {
    @include textStyles('Poppins', 500, 14px, 24px);
    text-transform: capitalize;

    color: rgba(0, 0, 0, 0.59);
}

textarea {
    min-height: 112px;
}

.textarea_info {
    @include textStyles('Poppins', 300, 14px, 21px);
    letter-spacing: -0.01em;

    color: rgba(0, 0, 0, 0.7);



}
</style>
