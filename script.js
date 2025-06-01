const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const wrapper = document.getElementById('wrapper');
const topImage = document.getElementById('topImage');

function moveBtnRandomly() {
  const i = Math.floor(Math.random() * 300);
  const j = Math.floor(Math.random() * 300);
  noBtn.style.top = `${i}px`;
  noBtn.style.left = `${j}px`;
}

// Desktop: when hover
noBtn.addEventListener('mouseover', () => {
  moveBtnRandomly()
});

// Mobile: when touch or click
noBtn.addEventListener('click', () => {
  moveBtnRandomly()
});



yesBtn.addEventListener('click', () => {
   document.body.innerHTML = `
        <div style="text-align:center; padding:20px;">
          <img src="good.jpg" style="width:200px; margin-bottom:20px;" />
          <h2 style="font-size:24px; color:#28a745;">
            Rajnish Yadav itna acha hai ki <br> No button khud hi darr ke idher udher bhag raha hai 😆
          </h2>
        </div>
      `;
});
