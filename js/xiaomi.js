$(function(){ 
            // 1 通过浏览器卷曲的高度来决定按钮的显示和隐藏
            $(window).scroll(function(){
                // 通过浏览器卷曲的高度来决定
                if($(window).scrollTop()>=780){
                    // 让回到顶部按钮显示
                    $('.top').fadeIn()
                }else{
                    // 让回到顶部按钮隐藏
                    $('.top').fadeOut()
                }
            })

            // 2 点击按钮的时候让页面滚动到顶部
            $('.top').click(function(){
                /* 
                    让页面回到顶部-->滚回去
                        让页面滚动回去,需要用到animate()函数
                        滚动的不是窗口,是页面
                        所以我们这里让页面的scrollTop变成0
                */
                $('html').animate(
                    {scrollTop:0},
                1000)

                /* 
                    animate是操作元素的样式
                    document是跟节点,不是元素
                    html是根元素节点
                */
            })
        })