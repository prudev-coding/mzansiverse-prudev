document.addEventListener('DOMContentLoaded', function () {

  const poemFormElement = document.querySelector('.poem-form');
  const poemContainer = document.getElementById('poem-container');
  const copyBtnGlobal = document.getElementById('copyBtn');

  const poems = {
    nature: [
      {
        title: "Heartbeat of the Highveld",
        poem: `The golden grass sways in the warm Highveld breeze,
Acacia trees stretch their arms toward the endless blue,
The sun rises slow over Johannesburg's rolling hills,
Painting the soil red — the colour of our roots.

Hornbills call across the morning mist,
Jacaranda petals fall like purple snow,
The rivers sing the songs of ancient rains,
And Mzansi breathes — alive and aglow. 🌿`
      },
      {
        title: "Song of the Drakensberg",
        poem: `Mountains rise like giants of old,
Their secrets wrapped in mist and stone,
The Drakensberg whispers stories untold,
Of rivers born and eagles flown.

Fynbos blooms where the wild winds blow,
The protea crowns the rugged earth,
In every petal, every leaf below,
South Africa celebrates her birth. 🌿`
      },
      {
        title: "Cape Rain",
        poem: `When the Cape rain falls on Table Mountain's face,
The city breathes a sigh of relief,
The fynbos drinks in its sacred space,
And the ocean exhales its grief.

Smell the earth, the wet red clay,
Children laugh and run outside,
This is Africa at end of day,
In every raindrop — our pride. 🌧️`
      }
    ],

    ubuntu: [
      {
        title: "I Am Because We Are",
        poem: `Ubuntu — I am because we are,
No single flame outshines the fire,
Together we rise, near and far,
Community is our heart's desire.

Share your bread, your roof, your song,
A stranger's child is your child too,
In Mzansi we have known all along —
That I am nothing without you. 🤝`
      },
      {
        title: "The Village Well",
        poem: `At the village well we meet each dawn,
Old gogo carries water on her head,
No one walks this dusty road alone,
We share our laughter, salt, and bread.

Ubuntu runs through our veins like blood,
It is the bridge between our souls,
From Limpopo plains to Cape Town's mud —
One people making each other whole. 🤝`
      }
    ],

    freedom: [
      {
        title: "27th April",
        poem: `On the 27th of April we stood tall,
Long lines snaking into history,
Old men and young girls — one and all,
Finally holding the key.

For this day Biko dreamed in chains,
For this day Mandela walked the yard,
For this day the blood fell like rains —
And now — freedom is no longer barred. ✊`
      },
      {
        title: "Born Free",
        poem: `We were born free into a broken world,
Inheriting the scars of yesterday,
Yet like the flag of Mzansi unfurled —
We carry tomorrow's light today.

They said silence — we chose to sing,
They built walls — we grew wings,
Freedom is not a gift from a king —
It is forged by the fire that history brings. ✊`
      }
    ],

    heritage: [
      {
        title: "Colours of Mzansi",
        poem: `Ndebele patterns on a whitewashed wall,
Zulu beads strung in the morning light,
Xhosa ochre paint worn proud and tall,
Sotho blankets warm against the night.

Eleven tongues, one beating heart,
San rock paintings speak from stone,
Heritage is both our end and start —
In every language — we are home. 🏺`
      },
      {
        title: "Gogo's Hands",
        poem: `Gogo's hands tell stories without words,
Weathered like the bark of a marula tree,
She weaves the basket as she hums to birds —
Carrying culture for you and me.

Do not let the old songs fade away,
Do not let the dances lose their fire,
Heritage is not just yesterday —
It is the song of our heart's desire. 🏺`
      }
    ],

    township: [
      {
        title: "Kasi Life",
        poem: `Waking up to the smell of magwinya,
Taxis hooting their morning song,
Kasi life — raw, warm and shining,
This is where we all belong.

Children kicking cans in the street,
Gogo selling fat cakes by the gate,
Music pouring from the corner beat —
In the township — life is never late. 🏘️`
      },
      {
        title: "Spaza Dreams",
        poem: `The spaza shop on the corner glows,
Candles and chips and cool drink cold,
This is where the neighbourhood grows —
Where young dreams are bought and sold.

We dream beyond the dusty streets,
Beyond the zinc and broken road,
In Mzansi every heartbeat beats —
Carrying tomorrow's golden load. 🏘️`
      }
    ],

    love: [
      {
        title: "Ngiyakuthanda",
        poem: `Ngiyakuthanda — I love you,
Words too small for what I feel,
Like the warm sun breaking through —
You make everything so real.

Your smile is the sunrise over Mpumalanga's hills,
Your laugh is the river after rain,
With you every high and every low —
Is a beautiful refrain. ❤️`
      },
      {
        title: "Love Like Ubuntu",
        poem: `Love in Mzansi is not just two,
It is the family, the village, the fire,
It is everything old made new —
A chorus of hearts lifting higher.

I love you like the land loves rain,
Like the fynbos loves the mountain mist,
No distance, no season, no amount of pain —
Can erase the warmth of your wrist. ❤️`
      }
    ],

    ancestors: [
      {
        title: "The Ones Who Walked Before",
        poem: `They walked these paths before my feet were formed,
Their whispers live inside the evening wind,
By their sacrifice I have been warmed —
Their stories live beneath my skin.

Burn the impepho, let the smoke rise high,
Call their names into the morning air,
The ancestors watch from a cloudless sky —
And answer every heartfelt prayer. 🕯️`
      },
      {
        title: "Impepho",
        poem: `Light the impepho, let the smoke curl slow,
Their names on my lips like ancient song,
Thokozani — where the old ones go —
In spirit they have walked along.

I am the sum of those who came before,
Their laughter lives inside my bones,
Every prayer a knock upon the door —
That leads me safely back to home. 🕯️`
      }
    ],

    youth: [
      {
        title: "Generation Gold",
        poem: `We are the children of June the 16th,
Born from the fire of those who stood,
We carry the torch past the 27th —
Into a future understood.

No more silence, no more waiting rooms,
We write our own names in the sky,
From Cape Town streets to Limpopo's blooms —
Generation Gold will never die. 🌟`
      },
      {
        title: "Tomorrow's Sunrise",
        poem: `The youth of Mzansi rise like the sun,
Fierce and bright and burning gold,
Every race and battle to be won —
Every story still to be told.

We are not the problem — we are the key,
Educated, creative, unafraid,
Watch us build the country we want to see —
On the foundation our ancestors laid. 🌟`
      }
    ],

    struggle: [
      {
        title: "Through the Fire",
        poem: `Through darkness we have fought,
For freedom and for right,
The battles that we sought,
Have brought us to this light.

The chains are gone but scars remain,
We build on broken ground,
Yet from every tear and every pain —
A new Mzansi is found. ✊`
      },
      {
        title: "Walls That Fell",
        poem: `They built the walls so tall and wide,
But walls were made to fall,
We stood together, side by side —
And answered freedom's call.

No law could silence what we felt,
No prison hold our dream,
Every card that fate had dealt —
Was never what it seemed. ✊`
      }
    ],

    celebration: [
      {
        title: "Ubuntu Beat",
        poem: `Sing loud, let Africa ring,
Dance to the ubuntu beat,
Let every voice now sing,
Our story is complete!

From Cape to Limpopo we rise,
Our colours fly up high,
Mzansi under golden skies —
A people born to fly! 🎉`
      },
      {
        title: "Braai Day Nation",
        poem: `The fires are lit across the land,
Every family gathered near,
We stand together hand in hand —
On this day we hold most dear.

Laughter rises with the smoke,
Music flows from every yard,
This is not just heritage folk —
This is love that hits the heart. 🎉`
      }
    ]
  };

  function generatePoem(event) {

    event.preventDefault();
    event.stopPropagation();

    const themeSelect = document.getElementById('themeSelect');
    const selectedTheme = themeSelect.value;

    const btn = document.getElementById('generateBtn');
    const poemBox = document.getElementById('poemBox');
    const poemTitle = document.getElementById('poemTitle');
    const poemContent = document.getElementById('poemContent');
    const copyBtn = document.getElementById('copyBtn') || copyBtnGlobal;

    if (!poems[selectedTheme]) {
      poemContent.innerText = 'No poems found for this theme. Please try another! 🌿';
      return;
    }

    const themePoems = poems[selectedTheme];
    const selected = themePoems[Math.floor(Math.random() * themePoems.length)];

    btn.disabled = true;
    btn.textContent = '✨ Generating...';
    poemBox.style.display = 'block';
    poemTitle.textContent = '';
    poemContent.innerHTML = '<div class="loading">🌿 Crafting your poem...</div>';

    setTimeout(() => {

      poemTitle.textContent = '📜 ' + selected.title;
      poemContent.innerHTML = '';

        // Type the poem once without deleting it so users can copy or delete manually.
        // Returns a Promise that resolves when typing is finished.
        function typeOnce(element, text, delay = 50) {
          return new Promise((resolve) => {
            element.innerHTML = '';
            const textSpan = document.createElement('span');
            textSpan.className = 'typed-text';
            const cursorSpan = document.createElement('span');
            cursorSpan.className = 'typing-cursor';
            cursorSpan.textContent = '|';
            element.appendChild(textSpan);
            element.appendChild(cursorSpan);

            let i = 0;
            const timer = setInterval(() => {
              i++;
              textSpan.textContent = text.slice(0, i);
              if (i >= text.length) {
                clearInterval(timer);
                // remove cursor when finished so it doesn't continue blinking or reverse
                cursorSpan.remove();
                resolve();
              }
            }, delay);
          });
        }

      if (copyBtn) {
        copyBtn.hidden = true;
        copyBtn.disabled = true;
      }

      if (typeof Typewriter !== 'undefined') {
        // Prefer a simple one-time typing effect instead of the library's looping/delete behavior.
        typeOnce(poemContent, selected.poem, 30).then(() => {
          if (copyBtn) { copyBtn.hidden = false; copyBtn.disabled = false; }
        });
      } else {
        poemContent.innerText = selected.poem;
        console.warn('Typewriter.js not loaded — showing poem as plain text.');
        if (copyBtn) { copyBtn.hidden = false; copyBtn.disabled = false; }
      }

      btn.disabled = false;
      btn.textContent = 'Generate Poem ✨';

    }, 1000);
  }

  if (poemFormElement) {
    poemFormElement.addEventListener('submit', generatePoem);
  } else {
    console.error('Form element not found! Make sure your form has class="poem-form"');
  }

  // Clipboard handler for the Copy button (added separately so listener isn't reattached repeatedly)
  const copyBtn = document.getElementById('copyBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const poemTitle = document.getElementById('poemTitle');
      const poemContent = document.getElementById('poemContent');
      let text = '';
      if (poemTitle && poemTitle.textContent) text += poemTitle.textContent + '\n\n';
      if (poemContent) {
        const typed = poemContent.querySelector('.typed-text');
        text += typed ? typed.textContent : poemContent.innerText;
      }
      try {
        await navigator.clipboard.writeText(text);
        const orig = copyBtn.textContent;
        copyBtn.textContent = 'Copied! ✅';
        setTimeout(() => copyBtn.textContent = orig, 1400);
      } catch (err) {
        console.error('Clipboard write failed', err);
        // Fallback: select and execCommand
        if (poemContent) {
          const range = document.createRange();
          range.selectNodeContents(poemContent);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          try { document.execCommand('copy'); } catch (e) { console.warn('execCommand copy failed', e); }
          sel.removeAllRanges();
          const orig = copyBtn.textContent;
          copyBtn.textContent = 'Copied! ✅';
          setTimeout(() => copyBtn.textContent = orig, 1400);
        }
      }
    });
  }

});
