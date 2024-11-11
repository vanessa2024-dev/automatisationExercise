export class dataElement{
    cart_modal='[id="cartModal"]'
    contact_button='.shop-menu > .nav > :nth-child(8) > a'
    contact_page='[id="contact-page"]'
    email_id='[id="email"]'
    fixture_path='data_test.json'
    shop_menu='[class="shop-menu pull-right"]'
    signup='.shop-menu > .nav > :nth-child(4)'
    label='label'
    login_button_submit='[data-qa="login-button"]'
    signup_name='[data-qa="signup-name"]'
    signup_email='[data-qa="signup-email"]'
    signup_button_submit='[data-qa="signup-button"]'
    signup_form='[class="login-form"]'
    slide_carroussel='[id="slider-carousel"]'
    gender2='[id="id_gender2"]'
    home='#form-section > .btn'
    input_name='[id="name"]'
    input_email='[data-qa="email"]'
    input_password='[data-qa="password"]'
    input_days='[data-qa="days"]'
    input_months='[data-qa="months"]'
    input_years='[data-qa="years"]'
    newletter='[id="newsletter"]'
    Option='[id="optin" ]'
    featute_items='[class="features_items"]'
    firstname_input='[data-qa="first_name" ]'
    formulaire_surPage_produit='.category-tab > :nth-child(1) > .nav'
    lastname_input='[data-qa="last_name" ]'
    left_sidebar='[class="left-sidebar"]'
    compagny_input='[ data-qa="company"]'
    address1_input='[ data-qa="address"]'
    address2_input='[ data-qa="address2"]'
    country_input='[data-qa="country" ]'
    state_input='[ data-qa="state"]'
    city_input='[data-qa="city" ]'
    zipcode_input='[data-qa="zipcode" ]'
    mobile_number_input='[ data-qa="mobile_number"]'
    create_account='[data-qa="create-account"]'
    featute_items='.features_items'
    form='[id="form"]'
    button_continue='[data-qa="continue-button"]'
    button_produit_horsConnexion='.shop-menu > .nav > :nth-child(2) > a'
    header_id='[id="header"]'
    review_id='[id="review"]'
    review_buttonId='[id="button-review"]'
    slide_id='[id="slider"]'
    sale_image='#sale_image'
    search_product='#search_product'
    sumbmit_search='[id="submit_search"]'
    suscribe_email='[id="susbscribe_email"]'
    suscribe='[id="subscribe"]'
    login_email='[data-qa="login-email" ]'
    login_password='[data-qa="login-password" ]'
    name_data='[data-qa="name"]'
    button_produit=':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'
    button_recherche='[id="advertisement"]'
    image='.view-product > img'
    product_information='[class="product-information"]'
    quantity_input='[id="quantity"]'
    button_Add_cart=':nth-child(5) > .btn'
    feedback_id='[ class="panel panel-default"]'
    footer='.modal-footer > .btn'
    home_footer='#footer'
    button_cart='.shop-menu > .nav > :nth-child(3) > a'
    button_proceed='.col-sm-6 > .btn'
    element_page_view='#cart_items > .container'
    message='[name="message"]'
    button_place_order=':nth-child(7) > .btn'
    case_tests_button_onCaroussel='.active > :nth-child(1) > .test_cases_list > .btn'
    cart_items='[id="cart_items"]'
    card_on_name='[data-qa="name-on-card"]'
    card_on_number='[ data-qa="card-number"]'
    cart_info_table='[id="cart_info_table"]'
    cvc='[data-qa="cvc"]'
    expiry_month='[data-qa="expiry-month"]'
    expiry_year='[data-qa="expiry-year"]'
    pay_button='[data-qa="pay-button"]'
    polo_link='.brands-name > .nav > :nth-child(1) > a'
    product_button='.shop-menu > .nav > :nth-child(2)'
    product_delete='[data-product-id="1"]'
    button_invoice='.col-sm-9 > .btn-default'
    subject='[data-qa="subject"]'
    contact_submit_form='[class="btn btn-primary pull-left submit_form"]'
    click_here='#empty_cart > .text-center > a '
    women_dress_id=':nth-child(1) > .panel-heading > .panel-title'
    women_products='#Women > .panel-body > ul > :nth-child(1) > a'





    randomEmail(){
        const randomNumber=Cypress._.random(0,1e6)
        return `user${randomNumber}@gmail.com`
    }
   selector=document.querySelector('[data-qa="create-account"]')

    event(){
   

   if(this.selector){

    this.selector.addEventListener("click", recupere(()=>{
        const first_name=document.querySelector(this.firstname_input)
         return first_name}), false)}

    else{
        return null 
    }

   
   
    
}}