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
                            <label for="exampleInputEmail1" class="form-label">Package Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                        </div>
                    </div>
                </div>
                <!-- Package Dimensions -->
                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>Package Dimensions</h1>
                        <hr>
                    </div>
                    <div class="d-flex edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Package Width (Pixels)</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Package Height (Pixels)</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                        </div>

                    </div>
                </div>
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
                <!-- switches -->
                <div class="package-name switches">
                    <div class="switches-container">
                        <div class="switch-info">Double Display</div>
                        <div class="switch ">
                            <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                inset></v-switch>
                        </div>
                    </div>
                    <div class="switches-container">
                        <div class="switch-info">Responsive:</div>
                        <div class="switch">
                            <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                inset></v-switch>
                        </div>
                    </div>
                    <div class="switches-container">
                        <div class="switch-info">Two Way Slideshow:</div>
                        <div class="switch">
                            <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                inset></v-switch>
                        </div>
                    </div>
                    <div class="switches-container">
                        <div class="switch-info">Random Slideshow</div>
                        <div class="switch">
                            <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                inset></v-switch>
                        </div>
                    </div>


                </div>
                <!-- playback properties -->
                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>Playback Properties</h1>
                        <hr>
                    </div>
                    <div class="auto-switches">
                        <div class="switches-container">
                            <div class="switch-info">Auto Start Slider</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                        <div class="switches-container">
                            <div class="switch-info">Auto Play Videos</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                        <div class="switches-container">
                            <div class="switch-info">Pause on Hover</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- navigation properties -->
                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>Navigation Properties</h1>
                        <hr>
                    </div>
                    <div class="auto-switches">
                        <div class="switches-container">
                            <div class="switch-info">Navigation Buttons</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                        <div class="switches-container">
                            <div class="switch-info">Show Start/Stop Buttons</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                        <div class="switches-container">
                            <div class="switch-info">Show Prev/Next Buttons</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                    </div>
                    <!-- row 2 -->
                    <div class="auto-switches row-2">
                        <div class="switches-container">
                            <div class="switch-info">Hover Prev/Next Buttons</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                        <div class="switches-container">
                            <div class="switch-info">Hover Bottom Navigation:</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                        <div class="switches-container">
                            <div class="switch-info">Keyboard Navigation:</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                        <div class="switches-container">
                            <div class="switch-info">Touch Navigation:</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Timer Properties -->
                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>Timer Properties</h1>
                        <hr>
                    </div>
                    <div class="auto-switches">
                        <div class="switches-container">
                            <div class="switch-info">Show Bar Timer</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                        <div class="switches-container">
                            <div class="switch-info">Show Circle Timer</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Include Crawler -->
                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>Include Crawler</h1>
                        <hr>
                    </div>
                    <div class="d-flex edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Use Crawler</label>
                            <select type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                                <option value=""></option>
                            </select>
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Crawler Height:</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Crawler Position</label>
                            <select type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                                <option value=""></option>
                            </select>
                        </div>

                    </div>
                </div>
                <!-- Display Grouping -->
                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>Display Grouping</h1>
                        <hr>
                    </div>
                    <p class="grouping-info">
                        Setting this package as the Default Display Package means it will play the first time a Display is
                        ever started up. From then on out, that Display will play the last Package played when starting up.
                    </p>
                    <div class=" edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Belongs to Display:</label>
                            <select type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                </div>
                <!-- Display Grouping -->
                <div class="package-name">
                    <div class="general-properties text-left">
                        <h1>Publishing</h1>
                        <hr>
                    </div>
                    <p class="grouping-info">
                        If a Package is published, it will appear on the list of Packages that can be played when a User
                        logs into the Player. Otherwise, it's not there on the list. Regardless of publishing, a Package can
                        always be played through the player if you know the link to get to it.
                    </p>
                    <div class="auto-switches">
                        <div class="switches-container">
                            <div class="switch-info">Published</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                        <div class="switches-container">
                            <div class="switch-info">Suspend Auto Refresh</div>
                            <div class="switch ">
                                <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                    inset></v-switch>
                            </div>
                        </div>
                    </div>
                    <div class="btn-container d-flex justify-center"> <button class="add w-50" type="button">Create
                            Package</button>
                    </div>
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
</style>
