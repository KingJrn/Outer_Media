<template>
  <Navigation>
    <div id="content">
      <form action="" id="file-upload-form" class="uploader">
        <h2 class="text-center">Add New Image</h2>
        <p class="text-center">Upload to Organization or Parent Library</p>
        <div class="row">
          <div class="col">
            <label for="">Parent Organization</label>
            <div class="each-option">
              <input type="radio" name="parent" value="" />
              <select id="inputState" class="form-control">
                <option>Option one</option>
                <option>Option two</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label for="">Parent Image Library</label>
            <div class="each-option">
              <input type="radio" name="parent" value="" />
              <select id="inputState" class="form-control">
                <option>Option one</option>
                <option>Option two</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <p class="text-center">Upload To Existing Library Folder Or Create a New Library</p>
        <div class="row">
          <div class="col">
            <label for="">Upload To Existing Library Folder</label>
            <div class="each-option">
              <input type="radio" name="upload" value="" />
              <select id="inputState" class="form-control">
                <option>Option one</option>
                <option>Option two</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label for="">Upload To New Library Folder</label>
            <div class="each-option">
              <input type="radio" name="upload" value="" />
              <select id="inputState" class="form-control">
                <option>Option one</option>
                <option>Option two</option>
              </select>
            </div>
          </div>
        </div>

        <div class="image-side">
          <input
            id="file-upload"
            type="file"
            name="fileUpload"
            accept=".jpeg, .doc, .docx, .xls, .xlsx, .txt, .jpg, .png, .gif"
          />
          <label for="file-upload" class="image-label" id="file-drag">
            <img id="file-image" src="#" alt="Preview" class="hidden" />
            <div id="start">
              <div>Select a file or drag here</div>
              <div id="notimage" class="hidden">Please select an image</div>
              <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
            </div>
            <div id="response" class="hidden">
              <div id="messages"></div>
              <!-- <progress class="progress" id="file-progress" value="0">
                        <span>0</span>%
                      </progress> -->
            </div>
          </label>
        </div>

        <div class="btn-area">
          <button>Add Image</button>
        </div>
      </form>
    </div>
  </Navigation>
</template>

<script>
import Navigation from '@/layouts/Navigation.vue'
export default {
  name: 'AddImage',
  components: {
    Navigation
  },

  methods: {},
  mounted() {
    // const dropzone = new Dropzone("div#myId", { url: "/file/post" });
    function ekUpload() {
      function Init() {
        console.log('Upload Initialised')

        var fileSelect = document.getElementById('file-upload'),
          fileDrag = document.getElementById('file-drag'),
          submitButton = document.getElementById('submit-button')

        fileSelect.addEventListener('change', fileSelectHandler, false)

        // Is XHR2 available?
        var xhr = new XMLHttpRequest()
        if (xhr.upload) {
          // File Drop
          fileDrag.addEventListener('dragover', fileDragHover, false)
          fileDrag.addEventListener('dragleave', fileDragHover, false)
          fileDrag.addEventListener('drop', fileSelectHandler, false)
        }
      }

      function fileDragHover(e) {
        var fileDrag = document.getElementById('file-drag')

        e.stopPropagation()
        e.preventDefault()

        fileDrag.className = e.type === 'dragover' ? 'hover' : 'modal-body file-upload'
      }

      function fileSelectHandler(e) {
        // Fetch FileList object
        var files = e.target.files || e.dataTransfer.files

        // Cancel event and hover styling
        fileDragHover(e)

        // Process all File objects
        for (var i = 0, f; (f = files[i]); i++) {
          parseFile(f)
          uploadFile(f)
        }
      }

      // Output
      function output(msg) {
        // Response
        var m = document.getElementById('messages')
        m.innerHTML = msg
      }

      function parseFile(file) {
        console.log(file.name)
        output('<strong>' + encodeURI(file.name) + '</strong>')

        // var fileType = file.type;
        // console.log(fileType);
        var imageName = file.name

        var isGood = /\.(?=gif|jpg|png|jpeg)/gi.test(imageName)
        if (isGood) {
          document.getElementById('start').classList.add('hidden')
          document.getElementById('response').classList.remove('hidden')
          document.getElementById('notimage').classList.add('hidden')
          // Thumbnail Preview
          document.getElementById('file-image').classList.remove('hidden')
          document.getElementById('file-image').src = URL.createObjectURL(file)
        } else {
          document.getElementById('file-image').classList.add('hidden')
          document.getElementById('notimage').classList.remove('hidden')
          document.getElementById('start').classList.remove('hidden')
          document.getElementById('response').classList.add('hidden')
          document.getElementById('file-upload-form').reset()
        }
      }

      function setProgressMaxValue(e) {
        var pBar = document.getElementById('file-progress')

        if (e.lengthComputable) {
          pBar.max = e.total
        }
      }

      function updateFileProgress(e) {
        var pBar = document.getElementById('file-progress')

        if (e.lengthComputable) {
          pBar.value = e.loaded
        }
      }

      function uploadFile(file) {
        var xhr = new XMLHttpRequest(),
          fileInput = document.getElementById('class-roster-file'),
          pBar = document.getElementById('file-progress'),
          fileSizeLimit = 1024 // In MB
        if (xhr.upload) {
          // Check if file is less than x MB
          if (file.size <= fileSizeLimit * 1024 * 1024) {
            // Progress bar
            pBar.style.display = 'inline'
            xhr.upload.addEventListener('loadstart', setProgressMaxValue, false)
            xhr.upload.addEventListener('progress', updateFileProgress, false)

            // File received / failed
            xhr.onreadystatechange = function (e) {
              if (xhr.readyState == 4) {
                // Everything is good!
                // progress.className = (xhr.status == 200 ? "success" : "failure");
                // document.location.reload(true);
              }
            }

            // Start upload
            xhr.open('POST', document.getElementById('file-upload-form').action, true)
            xhr.setRequestHeader('X-File-Name', file.name)
            xhr.setRequestHeader('X-File-Size', file.size)
            xhr.setRequestHeader('Content-Type', 'multipart/form-data')
            xhr.send(file)
          } else {
            output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).')
          }
        }
      }

      // Check for the various File API support.
      if (window.File && window.FileList && window.FileReader) {
        Init()
      } else {
        document.getElementById('file-drag').style.display = 'none'
      }
    }
    ekUpload()
  }
}
</script>

<style lang="scss" scoped>
#content {
  height: 100%;
  width: 100%;
  padding: 65px;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 65%;
    background: #ffffff;
    border: 2px solid rgba(0, 0, 0, 0.07);
    box-shadow: 2px 4px 24px 1px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    padding: 60px 120px;

    h2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #282828;
    }
    label {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      color: #282828;
    }

    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #949ca9;
      margin-bottom: 60px;
    }
    hr {
      margin-top: 50px;
      margin-bottom: 50px;
    }

    .text-center {
      text-align: center;
    }
    label {
      margin-left: 30px;
    }
    .each-option {
      display: flex;
      gap: 20px;
    }

    .row {
      margin-bottom: 20px;

      input {
        height: 52px;
        background: #ffffff;
        border: 1px solid #e8e9ea;
        border-radius: 6px;
      }
    }
    .btn-area {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 60px;

      button {
        width: 65%;
        background: #1a1038;
        border-radius: 6px;
        height: 50px;
        color: white;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}

$theme: #454cad;
$dark-text: #5f6982;

// Upload Demo
//
.uploader {
  display: block;
  clear: both;
  margin: 0 auto;
  width: 100%;

  .image-label {
    float: left;
    display: flex;
    clear: both;
    width: 70%;
    padding: 2rem 1.5rem;
    text-align: center;
    background: #fff;
    border-radius: 7px;
    border: 3px solid #eee;
    transition: all 0.2s ease;
    user-select: none;

    &:hover {
      border-color: $theme;
    }
    &.hover {
      border: 3px solid $theme;
      box-shadow: inset 0 0 0 6px #eee;

      #start {
        i.fa {
          transform: scale(0.8);
          opacity: 0.3;
        }
      }
    }
  }

  #start {
    float: left;
    clear: both;
    width: 100%;
    &.hidden {
      display: none;
    }
  }
  #response {
    float: left;
    clear: both;
    width: 100%;
    &.hidden {
      display: none;
    }
    #messages {
      margin-bottom: 0.5rem;
    }
  }

  #file-image {
    display: inline;
    margin: 0 auto 0.5rem auto;
    max-height: 300px;
    width: 100%;
    &.hidden {
      display: none;
    }
  }

  #notimage {
    display: block;
    float: left;
    clear: both;
    width: 100%;
    &.hidden {
      display: none;
    }
  }

  progress,
  .progress {
    // appearance: none;
    display: inline;
    clear: both;
    margin: 0 auto;
    width: 100%;
    max-width: 180px;
    height: 8px;
    border: 0;
    border-radius: 4px;
    background-color: #eee;
    overflow: hidden;
  }

  .progress[value]::-webkit-progress-bar {
    border-radius: 4px;
    background-color: #eee;
  }

  .progress[value]::-webkit-progress-value {
    background: linear-gradient(to right, darken($theme, 8%) 0%, $theme 50%);
    border-radius: 4px;
  }
  .progress[value]::-moz-progress-bar {
    background: linear-gradient(to right, darken($theme, 8%) 0%, $theme 50%);
    border-radius: 4px;
  }

  input[type='file'] {
    display: none;
  }

  div {
    margin: 0 0 0.5rem 0;
    color: $dark-text;
  }
  .btn {
    display: inline-block;
    margin: 0.5rem 0.5rem 1rem 0.5rem;
    clear: both;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    text-transform: initial;
    border: none;
    border-radius: 0.2rem;
    outline: none;
    padding: 0 1rem;
    height: 36px;
    line-height: 36px;
    color: #fff;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    background: $theme;
    border-color: $theme;
    cursor: pointer;
  }
}
.image-side {
  width: 100%;
  display: flex;
  margin-top: 25px;
  margin-bottom: 50px;
  height: auto;
  justify-content: center;
}
</style>
