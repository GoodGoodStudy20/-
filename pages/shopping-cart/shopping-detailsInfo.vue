<template>
	<view class="content">
		<view class="bg-top">
			
		</view>
		<customTitle :title="title" :isLeft="true">
			<!-- 轮播图 -->
			<swiper class="image-container" previous-margin="119rpx" next-margin="119rpx" circular autoplay
				@change="swiperChange">
				<swiper-item class="swiper-item" v-for="(item, index) in imgList" :key="index" lazy-load>
					<view class="item">
						<image class="img" :src="item.image" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="details-box">
				<view class="title">
					晨光
				</view>
				<view class="sub_title">
					生命面包 高蛋白面包
				</view>
				<view class="sub_title-2">
					学生配餐专供
				</view>
				<view class="price-box">
					<view class="origin-price">
						¥120.07/份
					</view>
					<view class="origin-price-box">

						<view class="actual-price">
							¥600.19/份
						</view>
						<view class="service-charge">
							含配送服务费
						</view>
					</view>
				</view>
			</view>
			<view class="bottom-img-1" :class="{top:imgTop1}" @tap="imgTop1 = !imgTop1">
				<view class="about">
					与我相关 About
				</view>
				<view class="img-box">
					<image src="../../static/images/index.jpg" mode="widthFix"></image>
				</view>
			</view>
			<view class="bottom-img-2" :class="{top:imgTop2}" @tap="imgTop2 = !imgTop2">
				<view class="about">
					配方 Formula
				</view>
				<view class="img-box">
					<image src="../../static/images/index.jpg" mode="widthFix"></image>
				</view>
			</view>
		</customTitle>

	</view>
</template>

<script>
	import customTitle from '@/components/custom-title.vue'
	export default {
		components: {
			customTitle
		},
		data() {
			return {
				title: '商品详情',
				imgTop1: false,
				imgTop2: false,
				imgList: [{
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				}, {
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}],
				currentIndex: 0,
				dontFirstAnimation: true
			}
		},
		methods: {
			swiperChange(e) {
				this.dontFirstAnimation = false
				this.currentIndex = e.detail.current
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		position: relative;
		padding-bottom: 500rpx;
		box-sizing: border-box;
		.bg-top{
			width: 100%;
			height: 500rpx;
			background-image: linear-gradient(to bottom , #61BCE3 10%, #ffffff 100%);
		}
		// 轮播图
		.image-container {
			width: 750rpx;
			height: 446rpx;
			margin-top: -120rpx;
		}

		.item {
			position: relative;
			width: 446rpx;
			height: 446rpx;
			padding-bottom: 80rpx;

			.img {
				width: 100%;
				height: 100%;
				box-shadow: #61BCE3 0px 0px 30rpx 0px;
			}
		}

		.swiper-item {
			width: 446rpx;
			height: 446rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.details-box {
			text-align: center;
			margin-top: 20rpx;
			color: #211715;

			.title {
				margin-bottom: 6rpx;
				font-size: 30rpx;
			}

			.sub_title {
				font-size: 44rpx;
			}

			.sub_title-2 {
				font-size: 24rpx;
				transform: rotate(0.8);
			}

			.price-box {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 40rpx;

				.origin-price {
					font-size: 12px;
					color: #211715;
					text-decoration: line-through;
					margin: -32rpx 20rpx 0 0;

				}

				.origin-price-box {
					text-align: left;
					font-size: 12px;

					.actual-price {
						font-size: 40rpx;
						font-weight: bold;
						color: #F54987;
					}


					.service-charge {
						color: #F54987;
						transform: scale(0.8);
					}
				}
			}
		}

		.bottom-img-1 {
			position: fixed;
			// top: 15vh;
			top: 82vh;
			width: 100%;
			height: 85vh;
			background-color: aqua;
			border-radius: 72rpx;
			z-index: 1;
			overflow: hidden;
			transition: all .3 ease;

			&.top {
				top: 15vh;
			}

			.about {
				width: 100%;
				color: #2296C8;
				font-size: 40rpx;
				text-align: center;
				margin: 40rpx 0 60rpx;
			}

			.img-box {
				width: 100%;

				image {
					width: 100%;
				}
			}
		}

		.bottom-img-2 {
			position: fixed;
			// top: 22vh;
			top: 91vh;
			width: 100%;
			height: 78vh;
			background-color: #66BFE6;
			border-radius: 72rpx;
			z-index: 2;
			overflow: hidden;
			transition: all .3 ease;

			&.top {
				top: 22vh;
			}

			.about {
				width: 100%;
				color: #ffffff;
				font-size: 40rpx;
				text-align: center;
				margin: 40rpx 0 60rpx;
			}

			.img-box {
				width: 100%;

				image {
					width: 100%;
				}
			}
		}
	}
</style>
