<template>
	<div class="container mt-4" id="dashboard-details">
		<div class="row d-flex justify-content-center align-items-center">

			<div class="col pt-5">
				<div class="card mb-5" style="border-radius: 15px;">
					<div class="card-body p-4">

						<h3 class="mb-3">Dashboard Details</h3>
						<p class="small mb-0"><i class="far fa-star fa-lg"></i>
							<span class="mr-2">|</span> Created by
							<strong> <a href="https://twitter.com/tr1pwyr">Tr1pwyr</a> </strong> on March 24 2024
						</p>
						<hr class="my-4">
					<div class="d-flex justify-content-start align-items-center">
						<p class="mb-0"><i class="fas fa-cog me-2"></i> <span class="text-muted small">settings</span></p>
						<p class="mb-0"><i class="fas fa-link ms-4 me-2"></i> <span class="text-muted small">link</span></p>
						<p class="mb-0"><i class="fas fa-ellipsis-h ms-4 me-2"></i> <span class="text-muted small">program</span>
							<span class="ms-3 me-4">|</span>
						</p>
						<a href="#!">
							<img src="/images/icons/virus.webp" alt="avatar" class="img-fluid rounded-circle me-3" width="30">
						</a>
						<button type="button" class="btn btn-outline-dark btn-sm btn-floating">
							<i class="fas fa-plus"></i>
						</button>
					</div>

					<hr class="my-5">
					<div class="d-flex justify-content-start align-items-center">
						<p class="mb-0 "><i class="fas fa-cog me-2"></i> <span class="text-muted small">settings</span></p>
						<p class="mb-0 "><i class="fas fa-link ms-4 me-2"></i> <span class="text-muted small">link</span></p>
						<p class="mb-0 "><i class="fas fa-ellipsis-h ms-4 me-2"></i> <span class="text-muted small">program</span>
							<span class="ms-3 me-4">|</span>
						</p>
						<a href="#!">
							<img src="/images/icons/firewall.webp" alt="avatar" class="img-fluid rounded-circle me-3" width="30">
						</a>
						<button type="button" class="btn btn-outline-dark btn-sm btn-floating">
							<i class="fas fa-plus"></i>
						</button>


					</div>

					</div>
				</div>


			</div>

			<div class="col">

				<div class="card">
					<div class="card-body text-center">
						<div class="mb-2">
							<img src="/images/kay-so.webp" class="rounded-circle img-fluid" style="width: 100px;" />
						</div>
						<h4 class="mb-2">Tr1pwyr</h4>
						<p class="text-muted mb-4">
							<a href="https://priv-mssg.com/user/trip">
								tr1p@tr1pwyr.com</a>
						</p>
						<div class="mb-4 pb-2">
							<button type="button" class="btn btn-secondary btn-floating">
								<BIconGithub />
							</button>
							<button type="button" class="btn btn-secondary btn-floating">
								<BIconTwitterX />
							</button>
							<button type="button" class="btn btn-secondary btn-floating">
								<BIconVirus />
							</button>
						</div>

						<div class="d-flex justify-content-between text-center mb-2">
							<div>
								<p class="mb-2 h5">8471</p>
								<p class="text-muted mb-0">Balance</p>
							</div>
							<div class="px-3">
								<p class="mb-2 h5">8512</p>
								<p class="text-muted mb-0">Reputation</p>
							</div>
							<div>
								<p class="mb-2 h5">4751</p>
								<p class="text-muted mb-0">Transactions</p>
							</div>
						</div>
					</div>
				</div>

			</div>


		</div>
	</div>
</template>

<script setup>
import {
	BIconVirus, BIconGithub, BIconTwitterX
} from "bootstrap-icons-vue";

</script>