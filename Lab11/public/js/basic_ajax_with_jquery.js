(function($) {
	//render your list of all shows
    let myform = $('#searchForm')
    let list = $('#showList')
    let input = $('#search_term')
    let data1 = true;
    let requestConfig3 = 0;

    let requestConfig = {
        method: 'GET',
        url: 'http://api.tvmaze.com/shows'
    };

    $.ajax(requestConfig).then(function(responseMessage) {
        let data = $(responseMessage);
       
        //console.log(JSON.stringify(data))
        for(let i=0; i< data.length; i++){
            $('#homeLink').hide();
        $(list).append(`<li id='${i}'><a id="mylinks" href="http://api.tvmaze.com/shows/${data[i].id}">${data[i].name}</a></li>`)
        }
         $('a').click(function(event){
            event.preventDefault();
            $('#homeLink').show();
            $('#homeLink').click(function(){
                location.reload();
        })
            console.log($(this).context.href)
            
            let requestConfig4 = {
                method: 'GET',
                url: $(this).context.href
            }


            $.ajax(requestConfig4).then(function(responseMessage){
                let data = responseMessage;
                $('#show').hide();
                $('#showList').hide();
              
                console.log(responseMessage);
                $('#name').append(data.name);
                if(!language){ $('#language').append("N/A");}
                else{  $('#language').append(data.language);}
              
                if(data.image == null){
                    $(`<img src='https://sit.instructure.com/users/17837/files/7181603/preview?verifier=kmXzmzhi65TP60BklRnLQ3nfb6FQ33yu0kgtGHhT'>`).appendTo('#image');
                  //  $('#image').attr("src", "https://sit.instructure.com/users/17837/files/7181603/preview?verifier=kmXzmzhi65TP60BklRnLQ3nfb6FQ33yu0kgtGHhT");
                }else{ 
                    //$('#image').attr("src", "");
                $(`<img src='${data.image.medium}'>`).appendTo('#image');
            }
                if(data.genres.length === 0|| data.genres == null){
                    $('#genre').append("N/A") 
                }  
                    else{
                        for(let i=0 ; i< data.genres.length ; i++){
                        $('#genre').append(`<li>${data.genres[i]}</li>`)
                        }
                    }
                if(!data.rating){
                    $('#rating').append("N/a")
                }else{
                $('#rating').append(data.rating.average);
                }if(!data.network){
                    $('#network').append("N/a")
                }else{
                $('#network').append(data.network.name);
                }
                if(!data.summary){
                    $('#summary').append("N/a")
                }else{
                $('#summary').append(data.summary);
                }
                

            })

            // let id = data[i].show.id;
            // $('#name').append(data[i].show.name)
            
            
            // console.log(id)
         //alert('Sign new href executed.'); 
          });
        
     
        
    });
    myform.submit(function(event){
        event.preventDefault();
        let requestConfig2 = {
            method: 'GET',
            url: `http://api.tvmaze.com/search/shows?q=${input.val()}`
        }
        
        $.ajax(requestConfig2).then(function(responseMessage){
             let data = $(responseMessage);
             
            console.log(input.val())
            //console.log(JSON.stringify(data))
            for(let i=0; i< data.length; i++){
             
            $('#show').append(`<li id='${i}' ><a id="mylinks2"  href='http://api.tvmaze.com/shows/${data[i].show.id}'>${data[i].show.name}</a></li>`)
           $('#show').show();
           $('#showList').hide();
            //data1 = data[i].show.id
           
          
            
            }
            $('a').click(function(event){
                event.preventDefault();
                console.log($(this).context.href)
                
                let requestConfig3 = {
                    method: 'GET',
                    url: $(this).context.href
                }
                $('#homeLink').show();
                $('#homeLink').click(function(){
                        location.reload();
                })
                $.ajax(requestConfig3).then(function(responseMessage){
                    let data = responseMessage;
                    $('#show').hide();
                    
                    console.log(responseMessage);
                    $('#name').append(data.name);
                    if(!language){ $('#language').append("N/A");}
                    else{  $('#language').append(data.language);}
                  
                    if(data.image == null){
                        $(`<img src='https://sit.instructure.com/users/17837/files/7181603/preview?verifier=kmXzmzhi65TP60BklRnLQ3nfb6FQ33yu0kgtGHhT'>`).appendTo('#image');
                      //  $('#image').attr("src", "https://sit.instructure.com/users/17837/files/7181603/preview?verifier=kmXzmzhi65TP60BklRnLQ3nfb6FQ33yu0kgtGHhT");
                    }else{ 
                        //$('#image').attr("src", "");
                    $(`<img src='${data.image.medium}'>`).appendTo('#image');
                }
                    if(data.genres.length === 0|| data.genres == null){
                        $('#genre').append("N/A") 
                    }  
                        else{
                            for(let i=0 ; i< data.genres.length ; i++){
                            $('#genre').append(`<li>${data.genres[i]}</li>`)
                            }
                        }
                    
                        if(!data.rating){
                            $('#rating').append("N/a")
                        }else{
                        $('#rating').append(data.rating.average);
                        }if(!data.network){
                            $('#network').append("N/a")
                        }else{
                        $('#network').append(data.network.name);
                        }
                        if(!data.summary){
                            $('#summary').append("N/a")
                        }else{
                        $('#summary').append(data.summary);
                        }
                        
                    
                })

                // let id = data[i].show.id;
                // $('#name').append(data[i].show.name)
                
                
                // console.log(id)
             //alert('Sign new href executed.'); 
              }); 
        })

    })
   

    //function to determine what the link will show on page

    //function to determine what the search will show on page
})(window.jQuery);