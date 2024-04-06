<script setup>
import {
	BIconCurrencyBitcoin,
	BIconBarChartFill,
	BIconHeartFill,
	BIconSun,
	BIconPieChartFill,
	BIconCurrencyExchange
} from "bootstrap-icons-vue";
</script>

<template>
	<div class="container mt-5">
		<div class="row mx-4">

			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 hack">
					<div class="d-flex align-content-center flex-wrap">
						<span>
							<a href="#" class="more-dots">
								<BIconBarChartFill /> NET 404.5 Mb/S
							</a>
							Where is this data from?
						</span>
					</div>
				</div>
			</div>

			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 bitcoin">
					<div class="d-flex align-content-center flex-wrap">
						<span>
							<a href="#" class="more-dots">
								<BIconCurrencyBitcoin /><span class="btc">BTC </span> $65,963
							</a>
							Where is this data from?
						</span>
					</div>
				</div>
			</div>

			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 success">
					<div class="d-flex align-content-center flex-wrap">
						<span>
							<a href="#" class="more-dots">
								<BIconHeartFill /> VUE VER <span class="up">3.3.8</span>
							</a>
							This App's Vue Version.
						</span>
					</div>
				</div>
			</div>

			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 poll">
					<div class="d-flex align-content-center flex-wrap">
						<span>
							<a href="#" class="more-dots">
								<BIconPieChartFill />
								Trump <span class="poll-percentage">53</span> Biden <span
									class="poll-percentage">45</span>
							</a>
							Latest Presidential Poll
						</span>
					</div>
				</div>
			</div>

			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 hack">
					<div class="d-flex align-content-center flex-wrap">
						<span>
							<a href="#" class="more-dots">
								<BIconSun /> 78 Degrees
							</a>
							In Beautiful Florida USA
						</span>
					</div>
				</div>
			</div>

			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 success">
					<div class="d-flex align-content-center flex-wrap">
						<span>
							<a href="#" class="more-dots">
								<BIconCurrencyExchange /> Crypto:<span class="up">Up</span>
							</a>
							The Broader Crypto Market
						</span>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<style>
.more-dots {
	display: block;
	text-decoration: none;
	font-weight: 800;
	font-size: 1.33rem;
	letter-spacing: -1px;
	word-spacing: -1px;
	padding-bottom: .33rem;
	margin-top: -.25rem;
}

.row {
	display: flex;
	flex-wrap: wrap;
}

.col-md-4 {
	display: flex;
}

.card {
	margin-bottom: .75rem;
}

.bitcoin {border: 1px solid #1e033a;	background-color: #1e033a;}

.bitcoin a, .bitcoin {color: #ffde89}

.dark .bitcoin {
	border: 1px solid #f4c022;
	color: #f4c022;
	background-color: rgba(52, 46, 24, .8);
}

.dark .bitcoin:hover {
	border: 1px solid #fdcd3c;
	color: #fccb3a;
	background-color: #373119;
}

.dark .bitcoin a {color: #fccb3a;}
.dark .bitcoin:hover a {color: #fff;}
.dark .bitcoin .btc {color: #ffe7a0;}

.success a {color:#ffffff;}
/* .success a {color: #b0f2c3;} */
.success a:hover {color: #fff;}
.success .up {color: #e7ff7a;}
.dark .up {color:#49add8;}
.success {border: 1px solid #00ba7c; color: #ffffff; background-color: #00ba7c;}

.success:hover {
	border: 1px solid #008055;
	color: #ffffff;
  background-color: #008055;
}

.dark .success {border: 1px solid #2c96c3; color: #2c96c3; background-color: #102635;}
.dark .success:hover {border: 1px solid #49add8; color: #3caddd; background-color: #0d202c;}


.dark .vue a, .hack a {color: }
.dark .vue:hover a, .hack:hover a {color: #fff;}

.hack { border: 1px solid #1b3cd1; color: #ffffff; background-color: #1b3cd1; font-weight: 700; }
.attack:hover { border: 1px solid #1e033a; color: #ffde89; background-color: #1e033a; }

.dark .hack {border: 1px solid #0171d9; color: #0171d9 !important; background-color: rgb(8, 31, 57, .9); }
.dark .hack:hover {border: 1px solid #0177e5; color: #0177e5 !important; background-color: #06172a !important;}

.poll {
	border: 1px solid #e60000;
	color: #FFFFFF;
  background-color: #e60000;
	cursor: pointer;
}

.poll:hover {
	border: 1px solid #f91880;
	background-color: #f91880;
}

.dark .poll {
	border: 1px solid #ce5353;
	color: #ce5353;
	background-color: rgba(45, 26, 33, .9);
}

.dark .poll:hover {
	border: 1px solid #de6767;
	color: #e16161;
	background-color: #25151b;
}

.poll a {color: #ffffff;}
.poll-percentage {color: #ffc1c1;}



</style>