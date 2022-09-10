$(document).ready(function(){
    $(".login").submit(function(event){
    event.preventDefault()
    $("#login").click(function(){
        let account = $(".account")
        $(".account").show(account)
        
    });
})
});