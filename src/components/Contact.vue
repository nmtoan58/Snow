<template>
    <div id="contact" class="contact">
        <div class="container">
            <div class="contact-box">
                <div class="contact__infor">
                    <div class="contact__infor-title">
                        <h2>Contact Infor:</h2>
                    </div>
                    <div class="contact__infor-description">
                        <p>
                            Praesent interdum congue mauris, et fringilla lacus
                            pel vitae. Quisque nisl mauris, aliquam eu ultrices
                            vel, conse vitae sapien at imperdiet risus. Quisque
                            cursus risus id. fermentum, in auctor quam
                            consectetur.
                        </p>
                    </div>
                    <div class="contact__infor-information">
                        <ul class="information-list">
                            <li class="information-item">
                                <strong>Address:</strong
                                ><span> 10111 Santa Monica Boulevard, LA</span>
                            </li>
                            <li class="information-item">
                                <strong>Phone:</strong
                                ><span> +44 987 065 908</span>
                            </li>
                            <li class="information-item">
                                <strong>Email:</strong
                                ><span> info@Example.com</span>
                            </li>
                            <li class="information-item">
                                <strong>Fax:</strong
                                ><span> +44 987 065 909</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <form class="contact__form">
                    <div class="contact__form-wrap">
                        <div class="contact__form-name">
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Your Email" />
                        </div>
                        <input type="text" placeholder="Your Title" />
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Your Comment"
                        ></textarea>
                    </div>
                    <button class="btn-submit">send message</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.contact {
    padding: 100px 0;
    background-color: #f6f6f6;
    font-family: "Work Sans", sans-serif;
}
.contact-box {
    display: flex;
    justify-content: space-between;
}
.contact__infor {
    width: 40%;
}
.contact__infor-title h2 {
    font-family: 'Playfair Display', serif;
    color: #171717;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 2.8rem;
    margin-bottom: 30px;
}
.contact__infor-description p {
    letter-spacing: 0.5px;
    line-height: 1.5rem;
    margin-bottom: 30px;
    color: #5f5f5f;
}
.information-item {
margin-bottom: 15px;
}
.information-item span {
    color: #5f5f5f;
    margin-left: 10px;
    
}
.contact__form {
    width: 55%;
}
.contact__form-wrap {
    display: flex;
    flex-direction: column;
}
input {
    background: #fff;
    outline: none;
    border: none;
    padding: 16px 22px;
    margin-bottom: 30px;
    font-family: "Work Sans", sans-serif;
}
textarea {
    background: #fff;
    border: none;
    outline: none;
    margin-bottom: 30px;
    font-family: "Work Sans", sans-serif;
    padding: 22px;
}
.contact__form-name {
    width: 100%;
    display: flex;
}
.contact__form-name input {
    width: 50%;
}
.contact__form-name input:not(:last-child) {
    margin-right: 30px;
}
button {
    padding: 18px 25px;
    font-size: 0.8rem;
    text-transform: uppercase;
    border: none;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    transition: all 0.5s;
}
button:hover {
    background-color: #393939;
}
</style>
