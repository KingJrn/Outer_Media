<template>
    <mainView>
        <div class="image-header top schedule-header">
            <div class="choose-edit">Choose one of your Displays to edit it's weekly schedule.</div>

            <form action="select-form" id="display">
                <select class="form-select" aria-label="Default select example">
                    <option selected><span>Display : Back Room Display</span></option>
                </select>
            </form>
            <div class="help" @click="dialog = true">
                <span>Help</span>
                <img class="table-icon" src="@/assets/images/vectors/questionMark.svg" alt="question mark" />

            </div>
        </div>
        <hr class="schedule-hr">
        <h3 class="weeekly-display-header">Weekly Schedules for "Back Room Display"</h3>
        <!-- range slider -->
        <v-app id="inspire">
            <v-card flat color="transparent">
                <v-subheader id="sub-header">Sunday</v-subheader>
                <v-card-text style="width: 97%">
                    <div class="position-relative">
                        <v-range-slider v-model="valueMulti" strict :ripple="false" min="0" max="24" ticks="always"
                            tick-size="4" thumb-label="always" :thumb-size="24" />
                        <div id="timeline-container">
                            <!-- timeline items here -->
                        </div>
                        <div class="position-relative">
                            <v-range-slider v-model="valueMulti" strict :ripple="false" min="0" max="24" ticks="always"
                                tick-size="0" :thumb-size="0" id="square-thumb" class="events-slider" />
                            <div class="upoming-acts">12.00 am (Upcoming Acts) {{ sliderLabel }}</div>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-app>
        <!-- dialog box -->
        <v-dialog v-model="dialog" width="auto">
            <v-card class="w-50 align-self-center">
                <v-card-text class="w-100">
                    <h4>About Scheduling</h4>
                    To add a schedule,

                    Click the text/dropdown box and either select a display name from the dropdown list,

                    Or start typing a display name to use the autocomplete feature to find it.

                    To edit a schedule, select it on the timeline by clicking the colored area and use the slider handles
                    which appear to adjust the time.

                    To delete a schedule, drag the slider handles together to eliminate the time block.
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'

export default {
    name: 'Schedule',
    components: {
        mainView
    },
    data() {
        return {
            valueMulti: [0, 24],
            dialog: false,
        }
    },
    computed: {
        sliderLabel() {
            const startHour = Math.floor(this.valueMulti[0])
            const startMinute = Math.floor((this.valueMulti[0] - startHour) * 60)
            const endHour = Math.floor(this.valueMulti[1])
            const endMinute = Math.floor((this.valueMulti[1] - endHour) * 60)
            return `${startHour}:${startMinute.toString().padStart(2, '0')} - ${endHour}:${endMinute
                .toString()
                .padStart(2, '0')}`
        }
    },
    mounted() {
        var container = document.getElementById('timeline-container');
        for (let i = 0; i < 24; i++) {
            const div = document.createElement('div');
            div.classList.add('timeline-item');
            container.appendChild(div);
        }
        for (let i = 0; i < 8; i++) {
            const span = document.createElement('span');
            span.classList.add('timeline-span');
            switch (i) {
                case 0:
                    span.innerHTML = '12am';
                    break;
                case 1:
                    span.innerHTML = '3am';
                    break;
                case 2:
                    span.innerHTML = '6am';
                    break;
                case 3:
                    span.innerHTML = '9am';
                    break;
                case 4:
                    span.innerHTML = '12pm';
                    break;
                case 5:
                    span.innerHTML = '3pm';
                    break;
                case 6:
                    span.innerHTML = '6pm';
                    break;
                case 7:
                    span.innerHTML = '9pm';
                    break;
                default:
                    break;
            }
            container.append(span);
        }

    },
}
</script>

<style lang="scss">
@use "sass:math";
@import '@/assets/scss/main.scss';

.upoming-acts {
    position: absolute;
    bottom: 28px;
    left: 15px;
}

#sub-header {
    font-weight: 700;
    font-size: 20px;
}

#timeline-container {
    width: 100%;
    position: relative;

    div.timeline-item {
        background: $thumb-background;
        width: 2.5px;
        height: 25px;
        position: absolute;
        top: -15px;
        overflow: hidden;
    }

    // Generate the 24 div elements
    @for $i from 0 through 23 {
        div:nth-child(#{$i + 1}) {
            left: math.div($i, 23) * 100%;
        }
    }

    span {
        position: absolute;
        top: -15px;
        letter-spacing: $default-letter-sapcing;
        color: $time-line-color;

    }

    // default value to calculate percentages values to place the the timeline span
    $left-value: 4.1667%;

    span:nth-of-type(1) {
        left: calc($left-value * 0);
    }

    span:nth-of-type(2) {
        left: calc(($left-value * 3) + 12px);
    }

    span:nth-of-type(3) {
        left: calc(($left-value * 6) + 20px);
    }

    span:nth-of-type(4) {
        left: calc(($left-value * 9) + 24px);
    }

    span:nth-of-type(5) {
        left: calc(($left-value * 12) + 30px);
    }

    span:nth-of-type(6) {
        left: calc(($left-value * 15) + 38px);
    }

    span:nth-of-type(7) {
        left: calc(($left-value * 18) + 46px);
    }

    span:nth-of-type(8) {
        left: calc(($left-value * 21) + 52px);
    }

}



.schedule-header {
    margin-bottom: 26px
}

.choose-edit {
    @include textStyles('Poppins', 300, 17px, 26px);
    letter-spacing: $default-letter-sapcing;
}

.weeekly-display-header {
    @include textStyles('Poppins', 400, 17px, 17px);
    margin-bottom: 26px;

}

select #display {

    width: calculate-value(171.5px);
    padding-left: calculate-value(17.5px);
    background: $body-input;
    @include textStyles('Poppins', 400, 12px, 18px);
    letter-spacing: $default-letter-sapcing;
    color: $body-small-text;
    border-radius: $default-spacing * 2;
}

.help {
    @include flexed-Container(row, flex-start);
    gap: calculate-value(11px);
    cursor: pointer;


    span {
        color: $nav-text-primary-bold;
        @include textStyles('Poppins', 700, 16px, 24px);
        letter-spacing: $default-letter-sapcing;
    }
}

hr.schedule-hr {
    border: 2px solid rgba(0, 0, 0, 0.12);
    margin-bottom: 42px;
}

.v-slider-thumb__surface.elevation-2 {
    border-radius: 0;
    background: $thumb-background;
}

.v-slider-track__fill {
    background: $v-slider-track-color;
    height: $default-height !important;
}

.v-slider-track__background.v-slider-track__background--opacity {
    height: $default-height !important;
}
</style>
