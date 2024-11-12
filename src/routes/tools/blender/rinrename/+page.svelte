<script>
  export let data
  import DoubleColumns from "$lib/components/doubleColumns.svelte"
  import ThreeColumns from "$lib/components/threeColumns.svelte"
  import Image from "$lib/components/image.svelte"
  import { Mail } from 'lucide-svelte';
  import { onMount } from 'svelte'

	// onMount(async () =>{
  //   // array with texts to type in typewriter
  //   var dataText = [ "##", "###", "###<100>", "###<22>", "00", "01", "037"];

  //   // type one text in the typwriter
  //   // keeps calling itself until the text is finished
  //   function typeWriter(text, i, fnCallback) {
  //     // chekc if text isn't finished yet
  //     if (i < (text.length)) {
  //       // add next character to h1
  //       document.querySelector("span.numbering").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

  //       // wait for a while and call this function again for next character
  //       setTimeout(function() {
  //         typeWriter(text, i + 1, fnCallback)
  //       }, 100);
  //     }
  //     // text finished, call callback if there is a callback function
  //     else if (typeof fnCallback == 'function') {
  //       // call callback after timeout
  //       setTimeout(fnCallback, 700);
  //     }
  //   }
  //   // start a typewriter animation for a text in the dataText array
  //   function StartTextAnimation(i) {
  //     if (typeof dataText[i] == 'undefined'){
  //       setTimeout(function() {
  //         StartTextAnimation(0);
  //       }, 1000);
  //     }

  //     // check if dataText[i] exists
  //     if (i < 10) {
  //       // text exists! start typewriter animation
  //       typeWriter(dataText[i], 0, function(){
  //         // after callback (and whole text has been animated), start next text
  //         StartTextAnimation(i + 1);
  //       });
  //     }
  //   }

  //   StartTextAnimation(0);
	// })

</script>

<div class="content-grid" style="">
  <div class="full-width">
    
    <!-- <div class="uk-cover-container">
      <canvas width="1920" height="750"></canvas>
      <img src="/images/tools/rinrename/rinrename-cover2.jpg" alt="" uk-cover>
    </div> -->

    <div class="image-container">
      <div class="center">
        <div class="main-title-subbox">
          <div class="main-title">
            RIn.<br>Rename_<br>
            <span class="main-title-sub"> - A Blender Addon to rename objects</span>
          </div>
          <div class="sub-title">
            Follows selection order <span class="separator">🞄</span> Rename Hidden Objects <span class="separator">🞄</span> Minimal Interface<br>
            Search & Replace <span class="separator">🞄</span> Copy name from Active <span class="separator">🞄</span> Regex Selection Mode<br>
            Batch Rename <span class="separator">🞄</span> Upper/Lower/TitleCase <span class="separator">🞄</span> Numbering / A-Z<br>
             <span class="separator">🞄</span> Real-Time Preview Results <span class="separator">🞄</span> ...and more
          </div>
        </div>
      </div>
    </div>
    
    <!-- <div class="uk-cover-container" uk-height-viewport>
        <img src="/images/tools/rinrename/rinrename-cover2.jpg" alt="" uk-cover>
      <div class="center">
        <div class="main-title-subbox">
          <div class="main-title">RIn.Rename</div>
          <div class="sub-title">
            Respect selection order <span class="separator">🞄</span> Rename Hidden Objects <span class="separator">🞄</span> Minimal Interface<br>
            Batch Rename <span class="separator">🞄</span> Preview Results <span class="separator">🞄</span> Search & Replace <span class="separator">🞄</span> Numbering / A-Z<br>
            Copy name from Active
          </div>
        </div>
      </div>
    </div> -->
  
  </div>
  
  <div class="ANIM_fadeIn">
    <h1>Tool Preview</h1>
    <p>Rinrename makes renaming selected objects in Blender intuitive and efficient. Just select some objects and press the hotkey to run the tool. With support for tokens like <b>#</b>, <b>$</b>, <b>@</b> and <b>~~</b> to create flexible naming patterns, you can streamline complex naming tasks. Plus, get instant feedback with real-time result previews directly in the viewport.</p>
  </div>
  
  <div class="breakout center ANIM_fadeIn">
    <video src="/images/tools/rinrename/videos/rinrename-intro.mp4" width="1400" height="650" loop controls playsinline uk-video></video>
    <span class="note">*The white number in front of the renamed text is representing the selection order.*</span>
    <!-- <img src="/images/tools/rinrename/rinrename-intro3.webp" /> -->
  </div>

  <div class="breakout ANIM_fadeIn">
    <DoubleColumns ratio="30">
      {#snippet column1()}
        <div class="columns">
          <h1>Select Order Matters</h1>
          <div>When you select or deselect objects in the viewport, this tool keeps track of the selection order. This ensures that when you apply numbering, the numbers follow the exact order in which the objects were selected.</div>
        </div>
      {/snippet}
      {#snippet column2()}
        <div class="columns">
          <video src="/images/tools/rinrename/videos/rinrename-selection-order.mp4" width="1400" height="700" loop controls playsinline uk-video></video>
          <!-- <img src="/images/tools/rinrename/rinrename-selection-order.webp" /> -->
        </div>
      {/snippet}
    </DoubleColumns>
  </div>

  <div></div>

  <div class="breakout ANIM_fadeIn">
    <DoubleColumns ratio="70">
      {#snippet column1()}
        <video src="/images/tools/rinrename/videos/rinrename-comma-rename.mp4" width="1400" height="600" loop controls playsinline uk-video></video>
                <!-- <img src="/images/tools/rinrename/rinrename-selection-order.webp" /> -->
      {/snippet}
      {#snippet column2()}
        <div class="columns">
          <h1>Rename multiple objects at the same time using comma</h1>
          <!-- <div><i>"Comma Rename"</i></div> -->
          <div><span class="note">*Note: Whitespaces surrounding text are trimmed / stripped*</span></div>
        </div>
      {/snippet}
    </DoubleColumns>
  </div>

  <div></div>

  <div class="breakout ANIM_fadeIn">
    <DoubleColumns ratio="30">
      {#snippet column1()}
        <div class="columns">
          <h1>Search and Replace</h1>
          <div>Use the token '<span class="token">/</span>' to replace text.</div>
          <div>Syntax: &lcub;old_text&rcub;/&lcub;new_text&rcub;</div>
          <h1>Remove text</h1>
          <div>&lcub;new_text&rcub; can be blank, typing `&lcub;old_text&rcub;/` will essentially remove any occurance of &lcub;old_text&rcub; in the name</div>
        </div>
      {/snippet}
      {#snippet column2()}
        <div class="columns" style="width:70%; height:100%">
          <video src="/images/tools/rinrename/videos/rinrename-search-and-replace.mp4" width="1000" height="550" loop controls playsinline uk-video></video>
          <!-- <img src="/images/tools/rinrename/rinrename-selection-order.webp" /> -->
        </div>
      {/snippet}
    </DoubleColumns>
  </div>

  <div></div>

  <div class="breakout ANIM_fadeIn">
    <DoubleColumns ratio="50">
      {#snippet column1()}
        <div class="center" style="height: 100%;">
          <video src="/images/tools/rinrename/videos/rinrename-convert-case.mp4" width="1400" height="500" loop controls playsinline uk-video></video>
        </div>
        <!-- <img src="/images/tools/rinrename/rinrename-selection-order.webp" /> -->
      {/snippet}
      {#snippet column2()}
        <div class="columns">
          <h2>Convert to Uppercase / Lowercase / Title</h2>
          <div>You can use the following keywords to convert the name into different case.</div>
          <div>Keywords: <br><span class="group">"<span class="token">/lo</span>", "<span class="token">/low</span>", "<span class="token">/lower</span>"</span>, <span class="group">"<span class="token">/up</span>", "<span class="token">/upper</span>"</span>, <span class="group">"<span class="token">/cap</span>", "<span class="token">/capitalize</span>", "<span class="token">/title</span>"</span>, <span class="group">"<span class="token">/trim</span>", "<span class="token">/strip</span>"</span></div>
          <div>
            "/trim" or "/strip" will remove whitespaces from both ends.
          </div>
        </div>
      {/snippet}
    </DoubleColumns>
  </div>

  <div></div>

  <div class="non-breakout ANIM_fadeIn">
    <h1>Numbering</h1>
    <div>
      You can use '<span class="token">#</span>' and/or 'numbers' in the input text to add numbering to multiple objects.
    </div>
    <div>
      You can also use '<span class="token">@</span>' to number with alphabets (A-Z).
    </div>
    <div>
      <span class="note">
        *Note: Any numbers in the input text will automatically increment for each subsequent item. If you want to keep a number static and avoid incrementing, enclose it in angle brackets. For example, entering 'car&lt;10&gt;' will result in all names being 'car10' (instead of car10, car11, car12, etc.).
      </span>
    </div>
  </div>

  <div class="breakout">
    <ThreeColumns>
      {#snippet column1()}
        <div class="numbering-table">
          <table class="uk-table">
            <!-- <caption>Table Caption</caption> -->
            <thead>
              <tr>
                <th>Input</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>##</b><br><span class="note">*Zero padded two digits*</span></td>
                <td>01<span class="fade">, 02, 03, ...</span></td>
              </tr>
              <tr>
                <td><b>####</b><br><span class="note">*Zero padded four digits*</span>
                </td><td>0001<span class="fade">, 0002, 0003, ...</span></td>
              </tr>
              <tr>
                <td><b>###&lt;32&gt;</b><br><span class="note">*Zero padded three digits. Starts from number 32*</span></td>
                <td>032<span class="fade">, 033, 034, ...</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      {/snippet}
      {#snippet column2()}
      <div class="numbering-table">
        <table class="uk-table">
          <!-- <caption>Table Caption</caption> -->
          <thead>
            <tr>
              <th>Input</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1</b><br><span class="note">*Starts from number 1. Not using zeros*</span></td>
              <td>1<span class="fade">, 2, 3, ...</span></td>
            </tr>
            <tr>
              <td><b>008</b><br><span class="note">*Starts from number 8*</span></td>
              <td>008<span class="fade">, 009, 010, ...</span></td>
            </tr>
            <tr>
              <td><b>0100</b><br><span class="note">*Starts from number 100*</span></td>
              <td>0100<span class="fade">, 0101, 0102, ...</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/snippet}
      {#snippet column3()}
      <div class="numbering-table">
        <table class="uk-table">
          <!-- <caption>Table Caption</caption> -->
          <thead>
            <tr>
              <th>Input</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>@</b><br><span class="note"></span></td>
              <td>A<span class="fade">, B, C, ...</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/snippet}
    </ThreeColumns>
    <!-- <h3>Hallo, Wij zijn Codefield!</h3> -->
  </div>

  <div class="breakout ANIM_fadeIn">
    <DoubleColumns>
      {#snippet column1()}
        <div class="columns">
          <h1>Prefix & Suffix</h1>
          <div>Use the token '<span class="token">$</span>'</div>
          <div>'$' represents each object's name, so to add a prefix, you would type: 'Prefix_$'.<br>
            <span class="note">If your selection is 'Cube' and 'Sphere', the result will be 'Prefix_Cube' and 'Prefix_Sphere'</span></div>
          <div>For suffix, you would type: '$_Suffix'</div>
          <div>Example: <br>to add numbering while keeping their names intact:<br>
            '$.001' <span class="note">(Result: 'cube.001', 'sphere.002')</span><br>
            '##_$' <span class="note">(Result: '01_cube', '02_sphere)</span>
          </div>
        </div>
      {/snippet}
      {#snippet column2()}
      <div class="columns">
        <h1>Renaming Collections</h1>
        <div>
          You can rename collections using the same techniques, the only limitation: <b>selection order is not tracked for collections</b> (Blender's API doesn't provide this functionality as for now)
        </div>
      </div>
      {/snippet}
    </DoubleColumns>
  </div>

  <div class="breakout ANIM_fadeIn">
    <DoubleColumns ratio="30">
      {#snippet column1()}
        <div class="columns">
          <h1>Expands to Collection's Name</h1>
          <div>Use the token '<span class="token">~~</span>'</div>
          <div>'~~' represents each object's collection name.</div>
          <div>&nbsp;</div>
          <div>In this video example, the naming for the objects in the 'LO' collection have extra '.001' which we can use the search and replace function to remove it ("<span class="token">.001/</span>")</div>
          <div>That's one extra step. Check out the group comma below to see how we can do it in one step.</div>
        </div>
      {/snippet}
      {#snippet column2()}
        <div class="columns">
          <video src="/images/tools/rinrename/videos/rinrename-expand-collection-name.mp4" width="1400" height="650" loop controls playsinline uk-video></video>
          <!-- <img src="/images/tools/rinrename/rinrename-selection-order.webp" /> -->
        </div>
      {/snippet}
    </DoubleColumns>
  </div>

  <div class="breakout ANIM_fadeIn">
    <DoubleColumns ratio="30">
      {#snippet column1()}
        <div class="columns">
          <h1>Group Comma</h1>
          <div>We can approach the situation above using another technique which is group comma.</div>
          <div>Group comma works by going from collection to collection. It will take the text inside the group, applies them to objects of the first collection, the goes to next colection and applies the group text again.</div>
          <div>For example: <span class="note"><br><b>Input</b>: "(aaa,bbb,ccc)_~~". <br><b>Selection</b>: "object1, object2, object3" (all within the same collection '<u>X</u>'). <br><b>Output</b>: "aaa_X, bbb_X, ccc_X"</span></div>
          <div><span class="note">Using the same input from above: <br><b>Selection</b>: <span class="group">"X: object1, object2"</span> <span class="group">"Y: object1"</span> <span class="group">"Z: object1, object2, object3"</span>. <br><b>Output</b>: "<span class="group">aaa_X, bbb_X</span>, <span class="group">aaa_Y</span>, <span class="group">aaa_Z, bbb_Z, ccc_Z</span>"</span></div>
          <div><span class="note">*More examples will be provided in the documentation (WIP)</span></div>
        </div>
      {/snippet}
      {#snippet column2()}
        <div class="columns">
          <video src="/images/tools/rinrename/videos/rinrename-group-comma.mp4" width="1400" height="700" loop controls playsinline uk-video></video>
          <!-- <img src="/images/tools/rinrename/rinrename-selection-order.webp" /> -->
        </div>
      {/snippet}
    </DoubleColumns>
  </div>

  <div></div>

  <div class="breakout ANIM_fadeIn">
    <DoubleColumns ratio="60">
      {#snippet column1()}
        <video src="/images/tools/rinrename/videos/rinrename-copy-from-active.mp4" width="1350" height="700" loop controls playsinline uk-video></video>
                <!-- <img src="/images/tools/rinrename/rinrename-selection-order.webp" /> -->
      {/snippet}
      {#snippet column2()}
        <div class="columns">
          <h1>Copy name from Active Object</h1>
          <div><span class="note">The active object in Blender is the *last item* selected in Object Mode. It's outlined in yellow.</span></div>
          <div>Select multiple objects, making sure to select the &#123;source&#125; or &#123;active&#125; object last. Type '=' (and then press Enter/Ok) to copy the &#123;source&#125; name.</div>
          <div><span class="note">*Note: Numbering will be added to target names.</span></div>
          <div>In the video example, <br>&#123;source&#125; or &#123;active&#125; = cube, <br>results = cube.001, cube.002, ...</div>
        </div>
      {/snippet}
    </DoubleColumns>
  </div>

  <div></div>

  <div class="breakout ANIM_fadeIn">
    <DoubleColumns ratio="50">
      {#snippet column1()}
        <video src="/images/tools/rinrename/videos/rinrename-name-mirroring.mp4" width="900" height="750" loop controls playsinline uk-video></video>
      {/snippet}
      {#snippet column2()}
        <div class="columns">
          <h1>Name Mirroring</h1>
          <div>Use '<span class="token">==</span>' to copy names from first half of the selection to the second half.</div>
          <div><span class="note">
            <b>Code Logic</b>:<br>
              Selections is divided by 2 to get the first half and second half, names are then copied from first half to second half
          </span></div>
        </div>
      {/snippet}
    </DoubleColumns>
  </div>

  <div></div>

  <div class="non-breakout ANIM_fadeIn">
    <h1>Selection Mode!</h1>
    <div>
      Not what you would expect from a renamer, but it's an interesting feature that I hope will be useful.
    </div>
    <div>
      When nothing is selected, run this tool and it will activate the selection mode, which can be used to select objects in the scene with <b>Regular Expressions</b>.
    </div>
    <div>
      <span class="note">*Note: <br><b>Selection Mode</b> is still in early testing. It's not fully featured, currently only supports direct translation of Python regular expression.</span>
    </div>
  </div>

  <div class="breakout ANIM_fadeIn">
      <video src="/images/tools/rinrename/videos/rinrename-selection-mode.mp4" width="1500" height="800" loop controls playsinline uk-video></video>
  </div>

  <div></div>

  <div class="ANIM_fadeIn">
    <h1 class="there-is-also">Oh, there's also..</h1>
  </div>

  <div class="breakout ANIM_fadeIn">
    <ThreeColumns>
      {#snippet column1()}
        <h1>Swap Name ('<span class="token">/x</span>')</h1>
        <div class="p-10">
          Select two objects and use '<span class="token">/x</span>' to swap their names.
        </div>
      {/snippet}
      {#snippet column2()}
        <h1>Replace Separators ('<span class="token">&lt;&#123;sep&#125;&gt;</span>')</h1>
        <div class="numbering-table">
          <table class="uk-table">
            <!-- <caption>Table Caption</caption> -->
            <thead>
              <tr>
                <th>Input</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;<b>.</b>&gt;</td>
                <td>GEO-Forearm.R 🡒 GEO.Forearm.R</td>
              </tr>
              <tr>
                <td>&lt;<b>_</b>&gt;</td>
                <td>GEO-Forearm.R 🡒 GEO_Forearm_R</td>
              </tr>
              <tr>
                <td>&lt;<b> </b>&gt;<br><span class="note" style="position:absolute;padding:0;">*There's a space between the angle brackets*</span></td>
                <td>GEO-Forearm.R 🡒 GEO Forearm R</td>
              </tr>
              <tr>
                <td>&lt;<b>___</b>&gt;<br><span class="note" style="position:absolute;padding:0;">*Any text can be used, not just .,_- or space*</span></td>
                <td>GEO-Forearm.R 🡒 GEO___Forearm___R</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div><span class="note">
          <b>Code Logic</b>:<br>
            Under the hood, the code uses the pattern [^A-Za-z0-9]+ to find any characters that are not letters or numbers. It then replaces them with the text you provide to &lt;&#123;sep&#125;&gt;
        </span></div>
      {/snippet}
      {#snippet column3()}
        <h1>Copy Object Name to Data ('<span class="token">&gt;&gt;d</span>')</h1>
        <div class="p-10">In recent Blender versions, renaming an object automatically updates its data name.<br><br>
            However if needed, use '&gt;&gt;d' to manually copy the object's name to its data name.
        </div>
      {/snippet}
    </ThreeColumns>
    <!-- <h3>Hallo, Wij zijn Codefield!</h3> -->
  </div>

  <div></div>

  <div class="breakout ANIM_fadeIn2">
    <h1>Customizable HUD</h1>
      <div class="center">
        <div>We can customize some settings (including Hotkey) in the Addon Preferences...</div>
        <div><Image src="/images/tools/rinrename/rinrename-preferences.webp" alt="RIn.Rename Preferences" width="70%" /></div>
      </div>
    <div class="center">
      <div>and also use '<span class="token">./</span>' to edit the preferences <i>interactively</i>~</div>
      <div class=""><video src="/images/tools/rinrename/videos/rinrename-preferences-mode.mp4" width="1013" height="600" loop controls playsinline uk-video></video></div>
    </div>
  </div>

  <div></div>

  <div class="breakout ANIM_fadeIn">
    <h1 class="support">Support</h1>
    <div class="center support">
      <p>As this tool is currently in its beta stage, you may encounter some bugs. If you run into any issues, please feel free to reach out for support using one of the following methods:</p>
    </div>
    <ThreeColumns>
      {#snippet column1()}
        <div class="center">
          <div class="w-64 center">
            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg" class="filter-discord-color"/>
            <a class="text-sm font-bold" href="https://discord.gg/P7MnftDQ">Join Rabbit Heart's Discord Server</a>
          </div>
        </div>
      {/snippet}
      {#snippet column2()}
        <div class="center">
          <a class="text-sm my-4 font-bold" href="mailto: miicaneo@gmail.com"><Mail size="3rem"></Mail></a>
          <a class="text-sm font-bold" href="mailto: miicaneo@gmail.com">Email miica.</a>
        </div>
      {/snippet}
      {#snippet column3()}
      <div class="center">
        <div class="w-64 center">
          <a class="text-sm my-4 font-bold" href="#"><img src="https://blenderartists.org/uploads/default/original/4X/3/5/9/359f93d9347d57148196b3b4c3f3528f831e2f47.png" style="width:4rem" /></a>
          <a class="text-sm my-4 font-bold" href="#">BlenderArtist Threads for RIn.Rename</a>
        </div>
      </div>
      {/snippet}
    </ThreeColumns>

  </div>


  <!-- <div>
    <svelte:component this={data.content} />
  </div> -->
</div>

<style>
  video {
    border-radius: 0.5rem;
  }

  span.note {
    padding-block: 1rem;
    font-style: italic;
    font-size: .8em;
  }

  span.group {
    /* background-color: blue; */
    border: 1px solid rgba(0, 0, 0, 0.144);
    padding-inline: 0.2rem;
    border-radius: .3em;
  }

  span.token {
    font-weight: bold;
    /* font-size: 1.3rem; */
    /* color: black; */
    color: #dd4643;
  }

  div.numbering span.fade {
    color: #00000027;
  }
  
  div.numbering-table {
    /* background-color: red; */
    margin: 1rem;
    border: 1px solid #333333;
    border-radius: 1rem;
    /* background: rgb(34,193,195);
    background: linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    color: black; */
  }

  div.numbering table td {
    /* padding: 0; */
    padding: .5rem 1rem;
    /* background-color: red; */
  }

  div.breakout > * {
    margin-block: 1rem;
  }

  .columns {
    padding: 1rem;
  }

  .filter-discord-color {
    filter: invert(41%) sepia(28%) saturate(2358%) hue-rotate(208deg) brightness(97%) contrast(96%);
  }

  div {
    margin-top: 1rem;
    margin-top: 1rem;
  }

  .content-grid h1{
    text-align: center;
  }

  .breakout-image {
    padding-inline: clamp(0rem, -7.042rem + 30.047vw, 20rem);  /*minmax: 375,1440*/
  }

  .image-container {
    /* width: 100%; */
    height: 30rem;
    background-position: center;
    background-size: cover;
    background-image: url("/images/tools/rinrename/rinrename-cover2.jpg");
    background-attachment: fixed;
  }


  .main-title-subbox {
    width: clamp(20rem, 13.333rem + 29.63vw, 40rem); /*360,1440*/
    background-color: rgba(0, 0, 0, 0.4);
    /* background: transparent; */
    backdrop-filter: blur(10px);

    border-radius: .5rem;
    padding-block: 1rem;
    transform: translateY(+25%);
  }

  @supports (font-variation-settings: normal) {
    .main-title-box { font-family: InterVariable, sans-serif; }
  }

  .main-title {
    font-family: 'Candara';
    text-align: left;
    font-size: 3.5rem;
    /* font-weight: bolder; */
    /* color: black; */
    /* color: var(--teal-color); */
    color: white;
    letter-spacing: .1em;
    line-height: 1em;
    padding-left: 3rem;
    padding-bottom: 2rem;
  }

  .main-title-sub {
    display: block;
    margin-top: .75rem;
    /* background-color: red; */
    /* margin-top: -10rem; */
    font-size: 1rem;
    line-height: 2em;
    letter-spacing: 0em;
  }

  .sub-title {
    /* background-color: red; */
    font-size: .9em;
    /* font-weight: 500; */
    text-align: center;
    /* color: white;
    font-style: italic; */
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .sub-title::before {
    /* background-color: blue; */
    /* display: absolute; */
    content: '{ ';
    font-size: 1.2rem;
  }

  .sub-title::after {
    /* background-color: blue; */
    /* display: absolute; */
    content: ' }';
    font-size: 1.2rem;
  }

  span.separator {
    /* background-color: red; */
    margin-inline: .5rem;
  }

  .there-is-also {
    font-family: "Apalu";
    font-size: 7rem;
    /* color: var(--teal-color); */
    /* background-color: red; */
  }

  .support {
    font-family: "Bona Nova SC";
  }

  h1.support {
    font-size: clamp(4rem, 2.944rem + 4.507vw, 7rem); /*375,1440*/
  }

  div.support p {
    width: clamp(20rem, 12.958rem + 30.047vw, 40rem); /*375,1440*/
    font-size: 1.2rem /*375,1440*/
  }

	@keyframes scaleCycle {
		  0%	{scale: 1.1; -webkit-filter: blur(10px);}
		 50%	{scale: 1.0; -webkit-filter: blur( 0px);}
		100%	{scale: 1.1; -webkit-filter: blur(10px);}
	}

	.ANIM_scaleCycle {
		animation: scaleCycle;
		animation-duration: 10s;
		animation-iteration-count: infinite;
	}

	@keyframes fadeIn {
			0%		    { opacity: 0; -webkit-filter: blur(10px); }
			45%, 100%	{ opacity: 1; -webkit-filter: blur(0px);}
	}

	@keyframes fadeIn2 {
			0%		    { opacity: 0; -webkit-filter: blur(20px); }
			35%, 100%	{ opacity: 1; -webkit-filter: blur(0px);}
	}

	@keyframes shrink {
			25%		{ width: 50%; }
			85%		{ width:  4%; }
			100%	{ width:  4%; }
	}

	@keyframes letterSpacing {
			0%		    { letter-spacing: 0.5rem; opacity: 0; }
			80%, 100%	{ letter-spacing: 0.1rem; opacity: 1; }
	}

	/* animation-timeline DOESN'T WORK ON FIREFOX */
	@supports (animation-timeline: auto){
		.ANIM_fadeIn {
			animation: fadeIn linear forwards;
			animation-timeline: view();
		}

    .ANIM_fadeIn2 {
			animation: fadeIn2 linear forwards;
			animation-timeline: view();
		}
	}
</style>