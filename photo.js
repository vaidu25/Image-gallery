// Get all the labels and images
const labels = document.querySelectorAll('.item');
const images = document.querySelectorAll('.pic');

// Add event listener to each label
labels.forEach(label => {
  label.addEventListener('click', () => {
    // Get the data-name of the clicked label
    const categoryName = label.getAttribute('data-name');

    // Hide all images
    images.forEach(image => {
      image.style.display = 'none';
    });

    // Show only the images that match the category name
    images.forEach(image => {
      if (image.getAttribute('data-name') === categoryName || categoryName === 'all') {
        image.style.display = 'block';
      }
    });
  });
});


/*let filteritem = document.querySelectorAll('item');
let filterImages = document.querySelectorAll('.pic');


window.addEventListener('load',() =>{
  filteritem.addEventListener('click',(selectedItem)=>{
    if(selectedItem.target.classList.contains('item')){
      document.querySelector('menu-active').classList.remove('menu-active')
      selectedItem.target.classList.add('menu-active');
      let filterName= selectedItem.target.getAttribute('data-name');
      filterImages.forEach((image) => {
      let filterImages=image.getAttribute('data-name');
      if(filterImages == filterName|| filterName=='all'){
        image.style.display='block';
        }else{
          image.style.display='none';
    }
    })
  }
})
})








checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    const checkedId = e.target.id;
    const category = e.target.nextElementSibling.textContent.toLowerCase();

    picContainers.forEach((pic) => {
      if (checkedId === 'check1') {
        // Show all pics when "All Photos" is clicked
        pic.
        pic.style.transform = 'scale(1)';
      } else if (pic.classList.contains(category)) {
        // Show only pics of the selected category
        pic.style.opacity = 1;
        pic.style.transform = 'scale(1)';
      } else {
        // Hide pics that don't match the selected category
        pic.style.opacity = 0;
        pic.style.transform = 'scale(0)';
      }
    });
  });
});*/