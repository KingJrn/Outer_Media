<template>
    <div class="form-data">
        <div>
            <div class="d-flex edit-group w-100">
                <div class="mb-3 col">
                    <label for="exampleInputEmail1" class="form-label">Spots Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                        placeholder="Placeholder">
                </div>
                <div class="mb-3 col">
                    <label for="exampleInputEmail1" class="form-label">Link</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                        placeholder="Placeholder">
                </div>

            </div>
            <!-- Spots Dimensions -->
            <div class="package-name">
                <div class="general-properties text-left">
                    <div>
                        <h1>Spots Dimensions</h1>
                        <hr class="w-100">
                    </div>
                    <h2>Spot Dimensions: a pixel value (ex. 100).</h2>
                </div>
                <div class="d-flex edit-group w-100">
                    <div class="mb-3 col">
                        <label for="exampleInputEmail1" class="form-label">Width</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            required placeholder="Placeholder">
                    </div>
                    <div class="mb-3 col">
                        <label for="exampleInputEmail1" class="form-label">Height</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            required placeholder="Placeholder">
                    </div>
                </div>
            </div>
            <!-- Spot Timing -->
            <div class="package-name">
                <div class="general-properties text-left">
                    <div>
                        <h1>Spot Timing</h1>
                        <hr class="w-100">
                    </div>

                </div>
                <div class="d-flex edit-group w-100">
                    <div class="mb-3 col">
                        <label for="exampleInputEmail1" class="form-label">Slide Delay (in milliseconds)</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            required placeholder="Placeholder">
                    </div>

                </div>
            </div>

            <!-- Other Options -->
            <div class="package-name">
                <div class="general-properties text-left">
                    <div>
                        <h1>Other Options</h1>
                        <hr class="w-100">
                    </div>
                </div>
                <div class="d-flex edit-group w-100">
                    <div class="mb-3 col">
                        <label for="exampleInputEmail1" class="form-label">2d Transition </label>
                        <select type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            required placeholder="Placeholder">
                            <option value=""></option>
                        </select>
                    </div>

                    <div class="mb-3 col">
                        <label for="exampleInputEmail1" class="form-label">3d Transition </label>
                        <select type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            required placeholder="Placeholder">
                            <option value=""></option>
                        </select>
                    </div>
                    <div class="mb-3 col">
                        <label for="exampleInputEmail1" class="form-label">Timeshift</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            required placeholder="Placeholder">
                    </div>

                </div>
            </div>
            <div class="btn-container d-flex justify-center"> <button class="add w-50" type="button">Next</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'GeneralProps'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/form.scss';

.package-name {
    width: 100%;
}

.general-properties {
    display: flex;
    justify-content: space-between;
    margin-bottom: 33px;

    h1 {
        @include textStyles('Poppins', 600, 18px, 27px);
        letter-spacing: -0.01em;
        color: rgba(0, 0, 0, 0.71);
    }

    h2 {
        @include textStyles('Poppins', 400, 16px, 24px);
        letter-spacing: -0.01em;
        color: #000000;
    }

    hr {
        border-top: 3px solid;
        width: 20%;
    }
}
</style>