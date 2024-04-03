<template>
	<section class="incident-table" id="incident-table">
		<div class="position-relative">
		
			<div class="table-responsive m-5">
				<div class="d-md-flex text-center align-items-center justify-content-between">
					<h6 class="link-symbol" >Latest Incidents</h6>
					<a class="link-symbol" href="/#what">Reset Log Files?</a>
				</div>
				<table class="table table-striped text-nowrap text-center text-lg-start">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Rating</th>
							<th>Trend</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="link in data">
							<td> {{ link.rank }} </td>
							<td>
								<div class="link-name d-flex align-items-center">
									<div class="link-img">
										<img :src="link.img" :alt="link.name" class="incident-table-image">
									</div>
									<h6 class="link-url mb-0">
										<a :href="link.link" class="gray-link text-decoration-none">
											{{ link.name }}
										</a>
										<span class="link-symbol">
											({{ link.symbol }})
										</span>
									</h6>
								</div>
							</td>
							<td>{{ link.rating }}</td>
							<td :class="{
							'green-text': link.change.startsWith('+'),
							'red-text': link.change.startsWith('-')
						}">
								{{ link.change }}
							</td>
							<td :class="{
							'green-text': link.action === 'Buy',
							'red-text': link.action !== 'Buy'
						}">
								{{ link.action }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			
		</div>
	</section>
</template>

<script setup>
import { data } from '../../js/leaderBoardData.js'
</script>

<style scoped>


.incident-table-image{
	height: 32px;
	widows: 32px;
	margin-right: 5px;
	opacity: 0.5;
}

.incident-table  .table-responsive{
	background-color:rgba(17, 17, 17, .5);
	border-radius: .5rem;
	padding: 1rem 1rem 0 0;
}

.incident-table-image:hover{
	opacity: 1;
}

.link-symbol{
	padding-left: 2px;
	font-size: .9rem;
	vertical-align: super;
	font-weight: 800;
}
h6{
	margin-left: .5rem;
}

.red-text{
	color:#b4483d;
}

.green-text{
	color: #73ca8b;
}
</style>