<script>
        const loveButton = document.getElementById('loveButton');
        const heart = document.getElementById('heart');

        loveButton.addEventListener('click', function() {
            // Toggle the animation class on the heart
            heart.classList.toggle('animate');
            
            // Change button text when heart is "enlarged"
            if (heart.classList.contains('animate')) {
                loveButton.textContent = 'Click to Stop the Love';
            } else {
                loveButton.textContent = 'Click to Show Love';
            }
        });
    </script>